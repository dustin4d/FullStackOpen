const Hello = (props) => {
  console.log(props)
  return (
  <div>
    <p>Hello {props.name}, it looks like youre {props.age} years old.</p>
  </div>
  )
}

const App = () => {
  console.log("Hello from the <App /> Component")

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)


  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <p>Now HMR works</p>
      <p>To get Hot Module Reloading to work, you need to use the WSL plugin in VSCode and open the WSL Distro via the command pallette.</p>
      <p>Right now, the time is {now.toString()}</p>
      <p>In other news: {a} plus {b} is {a+b}... Incredible stuff.</p>
    </div>
  )
}

export default App