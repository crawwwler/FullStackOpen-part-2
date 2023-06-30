import Content from './Content'
const Course = ({ courses }) => {

    // IN THIS RENDERING METHOD WE SHOULD USE KEY PROPERTY IN DIV 
    // AD REACT NEEDS TO ORGINIZE THE COURSES ARRAY
    // WE USE COURSE ID AS UNIQUE KEYS
    return (
        <div>
            <h1>Web development curicculum</h1>
            {courses.map(course =>
                <div key={course.id}>
                    <h3>{course.name}</h3>
                    <Content parts={course.parts} />
                </div>
            )}
        </div>
    )

}

export default Course