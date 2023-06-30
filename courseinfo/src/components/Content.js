import Part from './Part'
const Content = ({ parts }) => {
    // USING ARRAY METHOD , REDUCE, TO GET THE SUM OF THE EXERCISES
    const sumOfEx = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)
    return (
        <div>
            <ul>
                {parts.map(part =>
                    <Part key={part.id} part={part} />
                )}
            </ul>
            <h5>Total of {sumOfEx} exercises</h5>
        </div>
    )
}

export default Content