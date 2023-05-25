const { Router } = require('express')
const { studentsController } = require('../constrollers/students.controller')

const router = Router();

router.get('/students', studentsController.getStudent)
router.post('/students',studentsController.createStudent)
router.delete('/students/:id', studentsController.deleteStudent)
router.patch('/students/:id',studentsController.mutateStudent )






module.exports = router
