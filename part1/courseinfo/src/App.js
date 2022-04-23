const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({part, exercise}) => {
  <p>
    {part} {exercise}
  </p>
}

const Content = ({p1, ex1, p2, ex2, p3, ex3}) => {
  return (
    <>
      <Part p1 ex1 />
      <Part p2 ex3 />
      <Part p3 ex3 />
    </>
  )
}

const Total = ({ exercises1, exercises2, exercises3}) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 1
  return (
    <div>
      <Header course />
      <Content p1={part1} p2={part2} p3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      <Total exercises1 exercises2 exercises3 />
    </div>
  )

}

export default App;


