import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)

  // TODO: update average on each handler
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(total + 1)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(total + 1)
  }

  return (
    <div>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Stats metrics={[good, neutral, bad, total, avg]}/>
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

      <p>Total: {props.metrics[3]}</p>
      <p>Average: {props.metrics[4]}</p>
    </div>
  )
}

export default App