import {useState} from 'react'

const Button = (props) => {
  return(
    <div>
      <button>{props.text}</button>
    </div>
  )
}

const Feedback = () => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good"></Button>
      <Button text="neutral"></Button>
      <Button text="bad"></Button>
    </div>
  )
}

const Total = ({text, totalGood}) => {
  // if text === good, neutral, bad
  console.log(text)
  if (text === 'good') {
    return (
      <p>Total good: {totalGood}</p>
    )
  }

}

const Stats = (props) => {
  return(
    <div>
      <Total text="good" totalGood={props.totalGood}></Total>

    </div>
  )
}

const App = () => {

  const [totalGood, setTotalgood] = useState(0)
  const [totalNeutral, setTotalNeutral] = useState(0)
  const [totalBad, setTotalBad] = useState(0)

  return(
    <div>
      <Feedback />
      <h1>Statistics</h1>
      <Stats totalGood={totalGood}></Stats>
      <Stats totalNeutral={totalNeutral}></Stats>
    </div>
  )
}

export default App