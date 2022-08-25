import User from "../models/user-schema.js"
export const userSignup = async (req, res) => {
    try {
        //====================Username check in db==================
        const exist = await User.findOne({ username: req.body.username })
        if (exist) {
            return res.status(401).json({ message: "username already exist" })
        }
        //=====================================
        const user = req.body
        const newUser = new User(user)
        await newUser.save()
        res.status(200).json({ message: user })
        // console.log(req.body)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const userLogin = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        let user = await User.findOne({ username: username, password: password })
        if (user) {
            return res.status(200).json({data:user})
        }
        else {
            return res.status(201).json("invalid login")
        }
    }
    catch (err) {
        res.status(500).json("err", err.message)
    }
}