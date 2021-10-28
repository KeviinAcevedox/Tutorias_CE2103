const { Router } = require('express');
const router = Router(); // Se ejecuta y se guarda en una constante
const Course = require('../models/Course');

//GET
router.get('/getCourses', (req, res)=> {
    try {
        Course.find()
        .then((doc) => {
            res.json(doc);
        });
    } catch (err){
        console.log(err);
        res.send('Error while GET!');
    }
});

// POST
router.post('/addCourse', (req, res)=> {
    try {
        Course.insertMany([{course: req.body.course, code: req.body.code, grade: req.body.grade}],
             (err) => {
                 if (err){
                     console.log(err);
                 } else{
                     res.send('Successfull POST!');
                 }
             });

    } catch (err){
        console.log(err);
 }

});

// DELETE with parameter
router.delete('/deleteCourse/:key', (req, res) => {
    const { key } = req.params;
    Course.findOneAndDelete({code: key}, (err, doc) => {
        if(err){
            console.log(err);
        } else{
            res.send('Deleted successfully!');
        }
    })
});

// PUT 
router.put('/updateCourse/:key', (req, res) => {
    const { key } = req.params;
    // First, find the doc
    Course.findOneAndUpdate({code: key},
    {
        course: req.body.course,
        code: key,
        grade: req.body.grade
    }, (err) => {
        if(err){
            console.log(err);
        } else{
            res.send('Done baby');
        }
    });
});

module.exports = router;