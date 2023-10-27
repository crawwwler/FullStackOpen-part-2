import Content from './Content'
const Course = ({ courses }) => {

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