const Course = require("../model/Course");

const getAllCourses = (req, res, next) => {
  Course.find()
    .then((course) => {
      res.json({ response: course });
    })
    .catch((e) => {
      next(e);
    });
};

const addCourse = (req, res, next) => {
  Course.create(req.body)
    .then((course) => {
      res.json({ response: course });
    })
    .catch((e) => {
      next(e);
    });
};

const updateCourse = (req, res, next) => {
  Course.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((course) => {
      res.json({ response: course });
    })
    .catch((e) => {
      next(e);
    });
};

module.exports = {
  getAllCourses,
  addCourse,
  updateCourse,
};
