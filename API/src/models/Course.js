const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        course: {
            type: String
        },
        code: {
            type: Number
        },
        grade: {
            type: Number
        }
    });
    
// Collection name
const Course = mongoose.model('myCourse', CourseSchema);
module.exports = Course;