const AppError = require("../utils/AppError");
const Asset = require('../models/asset.model');

const addNewAsset = async (assetDetails, id) => {
    try{
        const newAsset = await Asset.create({
            userId: id,
            ...assetDetails
        })

        // store assets in db for user
        await newAsset.save();
        return newAsset;
    }
    catch(error){
        throw new AppError('Something went wrong while adding new asset to portfolio', 500);
    }
}

const updateExistingAsset = async(existingAsset, assetDetails) => {
    existingAsset.totalQuantity += assetDetails.totalQuantity;
    existingAsset.equityValue += assetDetails.equityValue;
    await existingAsset.save();
    return existingAsset;
}

module.exports = { addNewAsset, updateExistingAsset }