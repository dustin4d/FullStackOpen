import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = () => {
    console.log("Clicked")
  }

  return (
    <div>
      <Feedback handleClick={handleClick}/>
    </div>
  )
}

const Feedback = ({text, handleClick}) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='good' handleClick={handleClick}></Button>
            <Button text='neutral'></Button>
            <Button text='bad'></Button>
            <hr></hr>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

export default App