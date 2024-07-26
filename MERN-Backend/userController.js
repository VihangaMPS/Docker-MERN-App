const User = require("./userModel");


exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(200).json({
            status: "User created successfully",
            data: user
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find();

        res.status(200).json({
            status: "User created successfully",
            data: user
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}