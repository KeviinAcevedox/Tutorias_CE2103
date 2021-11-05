import { useState, useEffect } from "react";
import CourseList from "./CourseList";

const Home = () => {
    // Reactive variables
    const [courses, setCourses] = useState(null);

    const handleRemoveCourse = (code) => {
        const newCourses = courses.filter(course => course.code !== code);
        setCourses(newCourses);
    }

    // useEffect Hook
    // Every time the app render
    useEffect(() => {
        fetch('http://localhost:3000/api/getCourses/')
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            setCourses(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);

    // jsx
    return (  
        <div className="home">
            <h2>My Courses</h2>
            {courses && <CourseList courses={ courses} handleRemoveCourse = {handleRemoveCourse}></CourseList>}

        </div>
    );
}
 
export default Home;