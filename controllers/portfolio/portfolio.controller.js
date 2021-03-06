const AppError = require('../../utils/AppError');
const { decodeUserWithToken } = require('../../utils/token');
const Asset = require('../../models/asset.model');
const {
  addNewAsset,
  updateExistingAsset,
} = require('../../services/asset.service');
const { getPortfolioValue } = require('../../services/portfolio.service');
const catchAsync = require('../../utils/catchAsync');

/* Portfolio controllers */
exports.addAssets = catchAsync(async (req, res) => {
  try {
    // get assets from req.body
    const asset_details = req.body;

    // get the userID
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const userID = decodeUserWithToken(token);
    const { id } = userID;

    // check if user has the same asset in db and update
    const existingAsset = await Asset.findOne({
      symbol: asset_details.symbol,
    });
    if (
      existingAsset != null &&
      existingAsset.symbol === asset_details.symbol
    ) {
      await updateExistingAsset(existingAsset, asset_details);
      return res.status(201).json({
        status: 'success',
        message: `${asset_details.totalQuantity}${asset_details.symbol} successfully added to your portfolio.`,
      });
    }
    await addNewAsset(asset_details, id);
    return res.status(200).json({
      status: 'success',
      message: `${asset_details.totalQuantity}${asset_details.symbol} successfully added to your portfolio.`,
    });
  } catch (error) {
    throw new AppError(`Error while adding assets: ${error}`, 500);
  }
});

exports.viewPortfolio = catchAsync(async (req, res) => {
  try {
    const { check_value } = req.query;

    // get the userID
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const userID = decodeUserWithToken(token);
    const { id } = userID;

    // condition to get just the portfolio value
    if (check_value === 'true') {
      const portfolioVal = await getPortfolioValue(id);
      if (portfolioVal != null) {
        return res.status(201).json({
          status: 'success',
          message: 'Your portfolio value:',
          data: portfolioVal,
        });
      }
      throw new AppError('Error while getting portfolio value', 500);
    }

    // find assets with userId = id
    const portfolio = await Asset.find({ userId: id });
    if (portfolio.length === 0) {
      return res.status(200).json({
        status: 'success',
        message: 'User does not have any asset in portfolio',
      });
    }

    return res
      .status(200)
      .json({ status: 'success', message: 'Your portfolio:', data: portfolio });
  } catch (error) {
    throw new AppError(`Error while pulling portfolio records: ${error}`, 500);
  }
});
