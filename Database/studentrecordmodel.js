var mongoose = require('mongoose');

var RecordSchema = mongoose.Schema({
    student_id: String,
    student_name: String,
    class: Number,
    marks: {
        english: Number,
        tamil: Number,
        maths: Number,
        science: Number,
        social: Number
    }
})

module.exports = mongoose.model('RecordModel', RecordSchema);


//sample schema data
// {
//     "student_name": "Keerthana",
//     "class": 10,
//     "marks": {
//         "english": 50,
//         "tamil": 75,
//         "maths": 90,
//         "science": 80,
//         "social": 82
//     }
// }