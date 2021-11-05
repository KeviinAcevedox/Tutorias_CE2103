const CourseList = ({courses, handleRemoveCourse}) => {

    return (  
        <div className="course-list">
            {courses.map((course) => (
                <div className="course-preview" key= {course.code}>
                    <h2>{course.course}</h2>
                    <p>Grade: {course.grade}</p>
                    <button onClick = {() => handleRemoveCourse(course.code)}>Remove Course</button>
                </div>
            ))}
        </div>
    );
}
 
export default CourseList;