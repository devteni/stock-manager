const bcrypt = require('bcryptjs');
const AppError = require("../utils/AppError");
const { decodeUserWithToken } = require('../services/token.service');
const User = require('../models/user.model');
const Asset = require('../models/asset.model');

/* Profile controllers */
exports.viewProfile = async(req, res, next) => {
    try{
        let token = req.body.token ||
                req.query.token ||
                req.headers["x-access-token"];
        const userID = decodeUserWithToken(token);
        const { iat, exp, ...data } = userID;

        // send decoded user details to client
        return res.status(200).json({ status: 'success', data})

    } catch(error) {
        console.log(new AppError('Error while fetching user details', 500));
    }
};

exports.updateProfile = async(req, res, next) => {
    try{
        const { action } = req.query;
        let token = req.body.token ||
                req.query.token ||
                req.headers["x-access-token"];
        const userID = decodeUserWithToken(token);
        const { id } = userID;
        if(action == 'edit'){
            const updatedData = req.body;

            // check if password is to be updated
            if(updatedData.password){
                const salt = await bcrypt.genSalt(10);
                const hashedPass = await bcrypt.hash(updatedData.password, salt);
                updatedData.password = hashedPass;
            }
            // find the user profile by id and update
            const user = await User.findByIdAndUpdate(id, { ...updatedData });
            if(!user) return res.status(404).json({ message: 'user not found!'});
            
            await user.save();
            return res.status(200).json({ status: 'success', message: 'Profile updated!', data: user})
        }

    }catch(error){
        throw new AppError('Error while updating profile', 500);
    }
};

/*Portfolio controllers */
exports.addAssets = async(req, res, next) => {
    try{
        // get assets from req.body
        const asset_details = req.body;

        // get the userID
        let token = req.body.token ||
                req.query.token ||
                req.headers["x-access-token"];
        const userID = decodeUserWithToken(token);
        const { id } = userID;

        // check if user has the same asset in db and update
        const existingAsset = await Asset.findOne({
            symbol: asset_details.symbol });
            console.log(existingAsset)
        if(existingAsset != null && existingAsset.symbol === asset_details.symbol){
            existingAsset.totalQuantity += asset_details.totalQuantity;
            existingAsset.equityValue += asset_details.equityValue;

            await existingAsset.save();
            return res.status(200).json({ status: 'success', message: `${asset_details.totalQuantity}${asset_details.symbol} successfully added to your portfolio.`})
        }
        else{
            const newAsset = await Asset.create({
                userId: id,
                ...asset_details
            })
    
            // store assets in db for user
            await newAsset.save();
            return res.status(200).json({ status: 'success', message: `${asset_details.totalQuantity}${asset_details.symbol} successfully added to your portfolio.`})    
        }
        } catch(error){
        throw new AppError('Error while adding assets', 500);
    }
}

exports.viewPortfolio = async(req, res, next) => {
    try{
        // get the userID
        let token = req.body.token ||
                req.query.token ||
                req.headers["x-access-token"];
        const userID = decodeUserWithToken(token);
        const { id } = userID;

        // find assets with userId = id
        const portfolio = await Asset.find({ userId: id });
        if(portfolio.length === 0){
            return res.status(200).json({ status: 'success', message: 'User does not have any asset in portfolio'});
        }
        return res.status(200).json({ status: 'success', data: portfolio });

    } catch(error){
        throw new AppError('Error while pulling portfolio records', 500);

    }
};


exports.viewLoanProfile = async(req, res, next) => {

}

