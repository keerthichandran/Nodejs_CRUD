var express = require('express');
var app = express();
var RecordController = require('./RecordController');

app.post('/create', (req, res) => {
    RecordController.createRecord(req.body, res);
})

app.patch('/update/:student_id', (req, res) => {
    RecordController.updateRecord(req.body, res, req.params.student_id)
})

app.delete('/delete/:student_id', (req, res) => {
    RecordController.deleteRecord(req.body, res, req.params.student_id)
})

app.get('/studentlist', (req, res) => {
    RecordController.getStudentList(req.body, res);
})

module.exports = app;

