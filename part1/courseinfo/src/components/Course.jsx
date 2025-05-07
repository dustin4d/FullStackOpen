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
  return (
    <div>
      <p>Total number of exercises: {props.total}</p>
    </div>
  )
}

export default Course