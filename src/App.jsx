import { useEffect, useRef, useState } from "react"
import Button from "./components/Button"
import TodoRow from "./components/TodoRow"

const App = () => {
  const [tasks, setTasks] = useState([])
  const task = useRef(null)

  useEffect(() => {
    localStorage["tasks"] && JSON.parse(localStorage["tasks"]).length && setTasks(JSON.parse(localStorage["tasks"]))
  },[])

  useEffect(() => {
    localStorage["tasks"] = JSON.stringify(tasks)
    task.current.focus()
  },[tasks])

  const addTask = (e) => {
    e.preventDefault()
    setTasks([...tasks, {task:task.current.value, done:false}])
    task.current.value = ''
  }
  return (
    <div className="container">
      <h1>Todo</h1>
      <div className="task-wrapper">
        {tasks.map((task,i) => <TodoRow key={i} index={i} task={task} tasks={tasks} setTasks={setTasks}/>)}
      </div>
      <form className="add-task-wrapper" onSubmit={addTask}>
        <input ref={task} type="text" placeholder="Add task here..."/>
        <Button variant='big'>Add</Button>
      </form>
    </div>
  )
}

export default App