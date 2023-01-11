const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  batchName: {
    type:String
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Batch = mongoose.model('Batch', batchSchema);
module.exports = Batch;