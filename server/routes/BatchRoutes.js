const express = require('express');
const router = express.Router();

const controller = require('../controllers/BatchController');

router.route('/')
    .get(controller.getAllBatches)
    .post(controller.createBatch)
    // .put(controller.updateBatch)

router.route('/:id')
    .put(controller.updateBatch)