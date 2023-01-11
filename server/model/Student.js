const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname: {
        type:String
    },
    lname: {
        type:String
    },
    username: {
        type:String
    },
    password: {
        type:String
    },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' }
  });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;