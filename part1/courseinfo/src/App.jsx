const Header = (props) => {
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  // Add course part* and exercises* here
  return (
    <div>
      <p>{props.parts[0]} - {props.exercises[0]} exercises</p>
      <p>{props.parts[1]} - {props.exercises[1]} exercises</p>
      <p>{props.parts[2]} - {props.exercises[2]} exercises</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total exercises: {props.totalExercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const allParts = [part1, part2, part3]
  const allExercises = [exercises1, exercises2, exercises3]
  const totalExercises = allExercises[0] + allExercises[1] + allExercises[2]

  return (
    <div>
      <Header course={course}/>
      <Content parts={allParts} exercises={allExercises}/>
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App