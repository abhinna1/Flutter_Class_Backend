const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type:String
    },
    batches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Batch' }]
  });
  

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;