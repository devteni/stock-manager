const bcrypt = require('bcryptjs');
const AppError = require("../../utils/AppError");
const { decodeUserWithToken } = require('../../services/token.service');
const User = require('../../models/user.model');

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