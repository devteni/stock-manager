const Asset = require('../models/asset.model');

const getPortfolioValue = async(id) => {
    try{
        const portfolio = await Asset.find({ userId: id });
        let portfolioVal = 0;
        let asset;
        for(asset in portfolio) {
            portfolioVal += portfolio[`${asset}`].equityValue;  
        };
        return portfolioVal;
    } catch(error){
        throw new AppError(`Error while getting portfolio value: ${error}`, 500);
    }
}

module.exports = { getPortfolioValue };