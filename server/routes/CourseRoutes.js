const controller = require('../controllers/CourseController')

const express = require('express')
const router = express.Router()

router.route('/')
    .get(controller.getAllCourses)
    .post(controller.addCourse)

router.route('/:id')
    .put(controller.updateCourse)