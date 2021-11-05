import { useState } from "react/cjs/react.development";

const NewCourse = () => {

    // using the useState Hook to keep the user values
    const [course, setCourse] = useState('');
    const [code, setCode] = useState(0);
    const [grade, setGrade] = useState(0);

    // Create the post request to the server
    const handlePost = (e) => {
        e.preventDefault();
        const newCourseObj = {course, grade, code};
        fetch('http://localhost:3000/api/addCourse', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCourseObj)
        })
        .then(() => {
            console.log('Posted');
        })
    }

    return (
        <div className="new-course">
            <h2>Post a Course</h2>
            <form onSubmit = {handlePost}>
                <label>
                    Course Name: 

                    <input type="text" required
                     value={course} onChange= {(e) => setCourse(e.target.value)}/>
                </label>
              
                <label>
                    Course Code:

                    <input type="number" required
                    value={code} onChange= {(e) => setCode(e.target.value)}/>
                </label>
                
                <label>
                    Course grade:

                    <input type="number" required
                     value={grade} onChange= {(e) => setGrade(e.target.value)}/>
                </label>
                <button>POST</button>
            </form>
        </div>
      );
}
 
export default NewCourse;