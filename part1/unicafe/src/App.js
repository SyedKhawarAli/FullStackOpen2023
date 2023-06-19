import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.goodFeedbacks + props.neutralFeedbacks + props.badFeedbacks
  const average = (props.goodFeedbacks - props.badFeedbacks) / all
  const positive = props.goodFeedbacks / all * 100
  if (all === 0) {
    return ( <div>No feedback given</div> )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={props.goodFeedbacks} />
        <StatisticsLine text="neutral" value={props.neutralFeedbacks} />
        <StatisticsLine text="bad" value={props.badFeedbacks} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div >
      <h1>give feedback </h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>statistics </h1>
      <Statistics goodFeedbacks={good} neutralFeedbacks={neutral} badFeedbacks={bad} />
    </div>
  );
}

export default App;
