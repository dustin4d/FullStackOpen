import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [top, setTop] = useState(0) // points to the index of `votes` for top voted

  const getVote = () => {
    setVotes(prev => {
      // Create a copy of the array
      const copy = [...prev]

      // Increment the value of the current index
      if (copy[selected] === undefined) {
        copy[selected] = 1
      } else {
        copy[selected] += 1
      }

      // update the top voted and send to state
      const maxVotes = Math.max(...copy) // find the top value of the copied array
      const newTop = copy.indexOf(maxVotes) // save the index of that top value
      setTop(newTop) // send top valued index to state

      // Return the updated copy to state
      return copy
    })
  }

  const getQuote = () => { // gen a rand num between 0 and anecdotes.length through updater function
    setSelected(() => {
      const randomIndex = Math.floor(Math.random() * anecdotes.length) 
      return randomIndex
    })
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Likes: {votes[selected]}</p>
      <button onClick={getQuote}>Get a new quote</button>
      <button onClick={getVote}>Like</button>
      <hr/>
      <h1>Top Voted Quote</h1>
      <p>{anecdotes[top]}</p>
      <p>Likes: {votes[top]}</p>
    
    </div>
  )
}

export default App
