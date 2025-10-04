const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All inputs are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("Email aldredy taken");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({
        username,
        email,
        password: hashedPassword,
    });

    if(!user){
        res.status(401);
        throw new Error("Registration Failed: Invaild credintaiols");
    }else{
        console.log(`User created suceafully ${user}`);
        res.status(200).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        });
    }
});

//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                id:user.id,
                email:user.email,
            },
        },process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
        res.status(200).json({accessToken: accessToken});
    }else{
        res.status(404);
        throw new Error("User not Found");
    }
});

//@desc Get the current user
//@route GET /api/users/current
//@access private
const getUser = asyncHandler(async (req,res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, getUser };