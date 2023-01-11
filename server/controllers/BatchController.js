const Batch = require("../model/Batch");

const getAllBatches = (req, res, next) => {
  Batch.find()
    .then((batch) => {
      res.json({ response: batch });
    })
    .catch((e) => {
      next(e);
    });
};

const createBatch = (req, res, next) => {
  Batch.create(req.body)
    .then((r) => {
      res.json({ response: r });
    })
    .catch((e) => {
      next(e);
    });
};

const updateBatch = (req, res, next) => {
  Batch.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((r) => {
      res.json({ response: r });
    })
    .catch((e) => {
      next(e);
    });
};

module.exports = {
  getAllBatches,
  createBatch,
  updateBatch,
};
