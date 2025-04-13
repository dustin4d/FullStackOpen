const Header = (props) => {
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} -- {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  // Add course part* and exercises* here
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.exercises[0]}/>
      <Part part={props.parts[1]} exercise={props.exercises[1]}/>
      <Part part={props.parts[2]} exercise={props.exercises[2]}/>
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

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const allParts = [part1.name, part2.name, part3.name]
  const allExercises = [part1.exercises, part2.exercises, part3.exercises]
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