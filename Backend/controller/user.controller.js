import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs'

export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message:"User already exit"});
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword
        });

        await createUser.save();
        res.status(201).json({message:"Create user successfully", user:{
            _id: createUser._id,
            fullname: createUser.fullname,
            email: createUser.email
        }});
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export const login = async (req, res)=> {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            const isMatch = await bcryptjs.compare(password, user.password);
            if(!user||!isMatch) {
                return res.status(400).json({message:"Invalid username or password"});
            }
            else{
                res.status(200).json({message:"Login successfully",user:{
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }})
            }
        } catch (error) {
            console.log("Error:", error.message);
            res.status(500).json({message:"Internal server error"});
        }
}