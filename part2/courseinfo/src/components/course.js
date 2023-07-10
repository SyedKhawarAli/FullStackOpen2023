const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}
    </>

const Course = ({ course }) => {
    const { name, parts } = course
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
            <Header course={name} />
            <Content parts={parts} />
            <Total sum={sum} />
        </>
    )
}

export default Course