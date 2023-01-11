const Student = require("../model/Student");

const getAllStudents = (req, res, next) => {
  Student.find()
    .then((r) => {
      res.json({ response: r });
    })
    .catch((e) => {
      next(e);
    });
};

const addStudent = (req, res, next) => {
  Student.create(req.body)
    .then((student) => {
      res.json({ response: student });
    })
    .catch((e) => {
      next(e);
    });
};



module.exports = {
  getAllStudents,
  addStudent,
};
