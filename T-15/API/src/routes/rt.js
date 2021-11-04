const { Router, json } = require('express');
const fs = require('fs');
const router = Router();

// GET
router.get('/getCourses', (req, res) => {
    try {
        const jsonString =fs.readFileSync('src/db.json', 'utf-8');
        const data = JSON.parse(jsonString);
        res.json(data);
    } catch(err){
        console.log(err);
    }
});

// POST
router.post('/addCourse', (req, res) => {
    const {course, code, grade } = req.body;

    if(course && code && grade){

        const newObject = {
            course: course,
            grade: grade,
            code: code
        }

        try{
            const jsonString = fs.readFileSync('src/db.json', 'utf-8');
            const data = JSON.parse(jsonString);

            data.push(newObject);

            const jsonData = JSON.stringify(data);
            fs.writeFile('src/db.json', jsonData, err => {
                if(err){
                    console.log(err);
                } else{
                    res.send('OK');
                }
            })
        } catch(err){
            console.log(err);
        }
    }
});

// PUT - UPDATE
router.put('/updateCourse/:key', (req, res) => {


});

// DELETE
router.delete('/deleteCourse/:key', (req, res) => {

});

module.exports = router;