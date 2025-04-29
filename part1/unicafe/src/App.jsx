import { useState } from 'react'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  // todo: fix async state renders, but this works
  const handleGood = () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(newFeedback)
    console.log(`Feedback state after click: ${feedback.good}`)
  }

  return(
    <div>
      <Feedback handleGood={handleGood}/>
    </div>
  )
}

const Feedback = (props) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={props.handleGood}>good</button>
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