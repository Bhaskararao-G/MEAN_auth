const Profession = require('../models/profession');

module.exports = {
    getProfessions(req, res) {
        Profession.find({}, (err, professions)=> {
            if (!err && professions.length > 0) {
                res.status(200).send({
                    success: true,
                    msg: "Professions fetched successfully",
                    professions: professions
                })
            }
        })
    },

    createProfession(req, res) {
        let pro_data = req.body;

        Profession.findOne({name: pro_data.name}, (err, proExists)=> {
            if (!err && proExists != null) {
                res.status(401).send({
                   success: false,
                   msg: "Profession already exists" 
                })
            } else {
                Profession.create(req.body, (err, newPro)=> {
                    if (!err && newPro != null) {
                        res.status(200).send({
                            success: true,
                            msg: "Profession created successfully",
                            profession: newPro
                        })
                    }
                })
            }
        })
    }
}