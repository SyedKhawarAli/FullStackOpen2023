
const GoodFeedbacks = (props) => {
  return (
    <p>
      good {props.goodFeedbacks}
    </p>
  )
}

const NeutralFeedbacks = (props) => {
  return (
    <p>
      good {props.neutralFeedbacks}
    </p>
  )
}

const BadFeedbacks = (props) => {
  return (
    <p>
      good {props.badFeedbacks}
    </p>
  )
}

const App = () => {

  const numberOfGoodFeedbacks = 10
  const numberOfNeutralFeedbacks = 10
  const numberOfBadFeedbacks = 10

  return (
    <div >
      <h1>give feedback </h1>
      <h1>statistics </h1>
      <GoodFeedbacks goodFeedbacks={numberOfGoodFeedbacks} />
      <NeutralFeedbacks neutralFeedbacks={numberOfGoodFeedbacks} />
      <BadFeedbacks badFeedbacks={numberOfGoodFeedbacks} />
    </div>
  );
}

export default App;
