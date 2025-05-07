const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ] 

  const getTotal = (course) => {
    // Loop into each course object
    return course.parts.reduce((acc, curr) => acc + curr.exercises, 0)
  }


  // render each course object independently using Array.map 
  return courses.map((course =>
    <Course key={course.id} course={course} total={getTotal(course)}/>
  ))

}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course}/>
      <Content course={props.course}/>
      <Total total={props.total} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  // `course` is an array, so use map to go through it
  return(
    <div>
      <Part part={props.course.parts} />
    </div>
  )
}

const Part = (props) => {
  return props.part.map(part => <li key={part.id}>{part.name} - {part.exercises}</li>)
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises: {props.total}</p>
    </div>
  )
} 

export default App