import { useState } from 'react'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGood = () => {
    setFeedback(prev => {
      const newFeedback = prev.good + 1
      const update = {
        ...prev,
        good: newFeedback,
      }

      return update
    })
  }

  const handleNeutral = () => {
    setFeedback(prev => {
      const newFeedback = prev.neutral + 1
      const update = {
        ...prev,
        neutral: newFeedback,
      }

      return update
    })
  }

  const handleBad = () => {
    setFeedback(prev => {
      const newFeedback = prev.bad + 1
      const update = {
        ...prev,
        bad: newFeedback,
      }

      return update
    })
  }

  return(
    <div>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Stats feedback={feedback}/>
    </div>
  )
}

const Feedback = (props) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={props.handleGood}>good</button>
            <button onClick={props.handleNeutral}>neutral</button>
            <button onClick={props.handleBad}>bad</button>
            <hr></hr>
        </div>
    )
}

const Stats = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.feedback.good}</p>
      <p>Neutral: {props.feedback.neutral}</p>
      <p>Bad: {props.feedback.bad}</p>

      <p>Total: </p>
      <p>Average: </p>
    </div>
  )
}

export default App