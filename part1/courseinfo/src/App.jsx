import Course from './components/Course.jsx'

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

  // pass in each course independently
  const getTotal = (course) => {
    // reduce each course's parts array for the total of exercises
    return course.parts.reduce((acc, curr) => acc + curr.exercises, 0)
  }


  // render each course object independently using Array.map 
  // pass exercise totals independently by passing in each course to getTotal()
  return courses.map((course =>
    <Course key={course.id} course={course} total={getTotal(course)}/>
  ))

}

export default App