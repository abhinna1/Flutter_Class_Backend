const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const controller = require('../controllers/StudentController');

router.route('/')
    .get(controller.getAllUser)
    