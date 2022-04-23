const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.data.part1} {props.data.exercises1}
      </p>
      <p>
        {props.data.part2} {props.data.exercises2}
      </p>
      <p>
        {props.data.part3} {props.data.exercises3}
      </p>
    </>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.data.exercises1 + props.data.exercises2 + props.data.exercises3}</p>
}

const data = {
  course: 'Half Stack application development',
  part1: 'Fundamentals of React',
  exercises1: 10,
  part2: 'Using props to pass data',
  exercises2: 7,
  part3: 'State of a component',
  exercises3: 14
}

const App = () => {
  return (
    <div>
      <Header course={data.course} />
      <Content data={data} />
      <Total data={data} />
    </div>
  )

}

export default App;


