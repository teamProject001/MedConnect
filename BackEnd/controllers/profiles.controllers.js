const ProfileModel = require('../database/models/profiles.models.js')


const AddProfile = async (req, res) => {

    try {

        ProfileModel.findOne({ user: req.body._id })
            .then(async (profile) => {
                if (!profile) {
                    //req.body.user = req.user.id
                    await ProfileModel.create(req.body)
                    res.status(200).json({ message: "success" })
                } else {
                    await ProfileModel.findOneAndUpdate(
                        { _id: profile._id },
                        req.body,
                        { new: true }
                    ).then(result => {
                        res.status(200).json(result)
                    })
                }
            })
    }
    catch (error) {
        res.status(404).json(error.message)
    }
}

const FindAllProfiles = async (req, res) => {
    try {
        const data = await ProfileModel.find().populate('user', ["name", "email", "role"])
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleProfile = async (req, res) => {
    try {
        const data = await ProfileModel.findOne({ user: req.params.id }).populate('user', ["name", "email", "role"])
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const DeleteProfile = async (req, res) => {
    try {
        const data = await ProfileModel.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "deleted" })

    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {
    AddProfile,
    FindAllProfiles,
    FindSingleProfile,
    DeleteProfile
}