import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("Good + 1")
    setGood(good + 1)
  }

  const handleNeutral = () => {
    console.log("Neutral + 1")
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    console.log("Bad + 1")
    setBad(bad + 1)
  }

  return (
    <div>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Stats metrics={[good, neutral, bad]}/>
    </div>
  )
}

const Feedback = (props) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <button text='good' onClick={props.handleGood}>good</button>
            <button text='neutral' onClick={props.handleNeutral}>neutral</button>
            <button text='bad' onClick={props.handleBad}>bad</button>
            <hr></hr>
        </div>
    )
}

const Stats = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.metrics[0]}</p>
      <p>Neutral: {props.metrics[1]}</p>
      <p>Bad: {props.metrics[2]}</p>
    </div>
  )
}

export default App