import { useState } from 'react'

const App = () => {
  /*
   * MAIN APPLICATION STATE
   */

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    avg: 0,
  })

  /*
   * EVENT HANDLERS
   */

  const handleGood = () => {
    setFeedback(prev => {
      const newFeedback = prev.good + 1
      const newTotal = prev.total + 1
      const score = (newFeedback * 1) + (prev.bad * -1)
      const newAvg = score / newTotal

      const update = {
        ...prev,
        good: newFeedback,
        total: newTotal,
        avg: newAvg,
      }

      return update
    })
  }

  const handleNeutral = () => {
    setFeedback(prev => {
      const newFeedback = prev.neutral + 1
      const newTotal = prev.total + 1
      // Neutral scores are not calculated in the average
      
      const update = {
        ...prev,
        neutral: newFeedback,
        total: newTotal,
      }

      return update
    })
  }

  const handleBad = () => {
    setFeedback(prev => {
      const newFeedback = prev.bad + 1
      const newTotal = prev.total + 1
      const score = (prev.good * 1) + ((prev.bad + 1) * -1)
      const newAvg = score / newTotal

      const update = {
        ...prev,
        bad: newFeedback,
        total: newTotal,
        avg: newAvg,
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
/* 
 * FEEDBACK AND BUTTONS
 */

const Feedback = (props) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='good' handleGood={props.handleGood} />
            <Button text='neutral' handleNeutral={props.handleNeutral}/>
            <Button text='bad' handleBad={props.handleBad} />
            <hr></hr>
        </div>
    )
}

const Button = (props) => {
  if (props.text === 'good') {
    return (
      <button onClick={props.handleGood}>Good</button>
    )
  }

  if (props.text === 'neutral') {
    return (
      <button onClick={props.handleNeutral}>Neutral</button>
    )
  }

  if (props.text === 'bad') {
    return (
      <button onClick={props.handleBad}>Bad</button>
    )
  }
}


/*
 * STATS AND SHIT
 */

const Stats = (props) => {
  if (props.feedback.total === 0) {
    return (
      <p>No feedback given.</p>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <StatsLine text='good' value={props.feedback.good} />
        <StatsLine text='neutral' value={props.feedback.neutral} />
        <StatsLine text='bad' value={props.feedback.bad} />
        <StatsLine text='total' value={props.feedback.total} />
        <StatsLine text='average' value={props.feedback.avg} />
        </tbody>
      </table>
    </div>
  )
}

const StatsLine = (props) => {
  if (props.text === 'good') {
    return (
      <>
      <tr>
        <td>Good:</td> 
        <td>{props.value}</td>
      </tr>
      </>
    )
  }

  if (props.text === 'neutral') {
    return (
      <>
      <tr>
        <td>Neutral:</td> 
        <td>{props.value}</td>
      </tr>
      </>
    )
  }

  if (props.text === 'bad') {
    return (
    <>
      <tr>
        <td>Bad:</td> 
        <td>{props.value}</td>
      </tr>
    </>
    )
  }

  if (props.text === 'total') {
    return (
      <>
      <tr>
        <td>Total:</td> 
        <td>{props.value}</td>
      </tr>
      </>
    )
  }

  if (props.text === 'average') {
    return (
      <>
      <tr>
        <td>Average:</td> 
        <td>{props.value}</td>
      </tr>
      </>
    )
  }
}

export default App