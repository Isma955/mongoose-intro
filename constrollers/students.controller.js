const Student = require("../models/Student.model")

module.exports.studentsController = {

    getStudent : (req, res) => {
        Student.find({}).then((data) => {
            res.json(data)
        })
    },
    createStudent : (req, res) => {
        Student.create({
            name: req.body.name ,
            phone: req.body.phone,
            age: req.body.age,
        })
        .then(() => { 
            res.json('Добавлен студент')
        })
        .catch((err) => {
            res.json(err)
        })
    },
    deleteStudent : (req, res) => {
        Student.findByIdAndRemove(req.params.id)
    .then (() => {
        res.json(`Студент ${req.params.id} удален`)
    })
    .catch((err) => {
        res.json(err)
    })
    },
    mutateStudent : (req, res) => {
        Student.findByIdAndUpdate (req.params.id,{name:req.body.name})
        .then(() => {
            res.json(`студент ${req.params.id} изменен`)
        })
        .catch((err) => {
            res.json(err)
        })
    },
}