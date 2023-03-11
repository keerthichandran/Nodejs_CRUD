var StudentRecord = require('../../Database/studentrecordmodel');
var Utils = require('../../Helpers/Utils');

function RecordController() {

    this.createRecord = function (reqData, res) {
        var student = new StudentRecord({
            student_id: Utils.createshortid(),
            student_name: reqData.student_name,
            class: reqData.class,
            marks: reqData.marks
        })
        student.save()
            .then(newrecord => {
                res.json(newrecord)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    this.updateRecord = function(reqData, res, studentId){
        StudentRecord.findOneAndUpdate({student_id: studentId}, reqData, function(err, Record){
            if(!err && Record){
                return res.json('Record updated')
            }else{
                return res.json({message: err})
            }
        })
    }
    this.deleteRecord = function(reqData, res, studentId){
        StudentRecord.findOneAndDelete({student_id: studentId}, reqData, function(err, Record){
            if(!err && Record){
                return res.json('Record Deleted')
            }else{
                return res.json({message: err})
            }
        })
    }

    this.getStudentList = function(reqDat, res){
        StudentRecord.find(function(err, studentlist){
            if(!err && studentlist){
                return res.json(studentlist)
            }else{
                return res.json('unable to get list')
            }
        })
    }
}

module.exports = new RecordController();