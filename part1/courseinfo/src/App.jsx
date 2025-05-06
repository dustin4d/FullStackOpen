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

  const getTotal = () => {
    const total = course.parts.reduce(
      (sum, curr) => sum += curr.exercises, 0
    )
    return total
  }

  return <Course course={course} getTotal={getTotal}/>
}

const Course = (props) => {
return (
  <div>
    <Header course={props.course}/>
    <Content course={props.course}/>
    <Total getTotal={props.getTotal} />
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

const Total = (props) => {

return (
  <div>
    <p>Total number of exercises: {props.getTotal()}</p>
  </div>
)
} 

export default App