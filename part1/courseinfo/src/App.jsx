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
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },

    {
      name: 'Using props to pass data',
      exercises: 7,
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  const allExercises = [parts[0].exercises, parts[1].exercises, parts[2].exercises]
  const totalExercises = allExercises[0] + allExercises[1] + allExercises[2]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App