import {useState} from 'react'

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const Feedback = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={props.handleClick}></Button>
      <Button text="neutral"></Button>
      <Button text="bad"></Button>
    </div>
  )
}

const Total = (props) => {
}


const Stats = (props) => {
    if (props.text === 'good') {
        return (
            <>
            <p>Good reviews: {props.metric}</p>
            </>
        )
    } else if (props.text === 'neutral') {
        return (
            <>
            <p>Neutral reviews: {props.metric}</p>
            </>
        )
    } else if (props.text === 'bad') {
        return (
            <>
            <p>Bad reviews: {props.metric}</p>
            </>
        )
    }
}

const App = () => {

  const [totalGood, setTotalGood] = useState(0)
  const [totalNeutral, setTotalNeutral] = useState(0)
  const [totalBad, setTotalBad] = useState(0)

  const handleClick = () => {
    console.log("Click handled")
  }

  return(
    <div>
      <Feedback handleClick={handleClick}/>

      <h1>Statistics</h1>
      <Stats text="good" metric={totalGood}></Stats>
      <Stats text="neutral" metric={totalNeutral}></Stats>
      <Stats text="bad" metric={totalBad}></Stats>
    </div>
  )
}

export default App