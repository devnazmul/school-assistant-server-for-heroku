const Teacher = require("../../models/Teacher");
const User = require("../../models/User");

const test = (req, res) => {
    res.send('test teacher controller.');
}

const getAll = (req, res) => {
    Teacher.find({}).then((teachers) => {
        res.send({
            status: "Success",
            data: teachers
        })
    })
    

}
const create = (req, res) => {
    User.find({ email: req.headers.user_email }, async (err, user) => {
        if (!err) {
            if (user.length > 0) {
                if (user[0]?.is_admin) {
                    const teacherExist = await Teacher.find({ email:req.body.email });
                    if (!teacherExist) {
                        Teacher.create({
                            spacial_at: req.body.spacial_at,
                            name: req.body.name,
                            email: req.body.email,
                            phone: req.body.phone,
                            gander: req.body.gander,
                            about: req.body.about,
                            date_of_birth: req.body.date_of_birth,
                            password: req.body.password,
                        }).then((teacher) => {
                            res.send({
                                status: "Success",
                                data: teacher
                            })
                        })
                    }else{
                        res.send({
                            status: "Failed",
                            message: 'This email already exist!'
                        })
                    } 
                } else {
                    res.send({
                        status: "Failed",
                        message: 'Sorry unable to create teacher!'
                    })
                }
            } else {
                res.send({
                    status: "Failed",
                    message: 'Sorry unable to create teacher!'
                })
            }
        } else {
            res.send({
                status: "Failed",
                message: 'Sorry unable to create teacher!'
            })
        }
    })
}

module.exports = {
    test,
    create,
    getAll
};