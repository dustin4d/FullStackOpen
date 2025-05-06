// 2.1 Course information
 const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course}/>
      <Content course={props.course}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.course.parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises}/>)}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercise}</p>
  )
}

export default App