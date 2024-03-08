const User = require('../models/userModel')
const UserProfile = require('../models/profileModel')
const generateUsername = require('../utils/generateUsername')

/**
 * @desc request for sign in 
 * @route POST /api/signup
 * @access public
 */
const signup = async (req, res, next) => {
    try {
        const { email, password, fullname } = req.body;
        if (!email || !password || fullname) {
            throw new Error('Missing credentials')
        }
        const exist = await User.findOne({ email: email });
        if (exist) {
            throw new Error('Email id already exist')
        }
        const newUser = await new User({
            email, password
        }).save()
        if (newUser) {
            await new UserProfile({
                username: await generateUsername(),
                fullname
            }).save()
            res.status(201).json({
                success: true,
                message: 'user registered successfully'
            })
        }else{
            throw new Error('Internal server error')
        }
    } catch (error) {
        next(error.message);
    }
}


module.exports = {
    signup
}

