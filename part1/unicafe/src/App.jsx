import { useState } from 'react'

const App = () => {
  // WE'RE MOVING IT TO AN OBJECT
  const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  avg: 0
});

console.log(feedback)

  const handlers = {
    good: () => {
      console.log(feedback)
      setTotal(total + 1)
    },

    neutral: () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      setTotal(total + 1)
    },

    bad: () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
      setTotal(total + 1)
    }
  }

  return (
    <div>
      <Feedback handlers={handlers}/>
      <Stats />
    </div>
  )
}

const Feedback = (props) => {
  console.log(props)
    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={props.handlers.good}>good</button>
            <button>neutral</button>
            <button>bad</button>
            <hr></hr>
        </div>
    )
}

const Stats = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: </p>
      <p>Neutral: </p>
      <p>Bad: </p>

      <p>Total: </p>
      <p>Average: </p>
    </div>
  )
}

export default App