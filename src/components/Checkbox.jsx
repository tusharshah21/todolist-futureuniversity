import React from 'react'

const Checkbox = ({index,children,tasks, setTasks, done}) => {
  const setDone = () => {
    const task = document.getElementById("task"+index)
    tasks[index].done = task.checked
    setTasks([...tasks])
  }
  return (
    <div className='checkbox'>
      <input checked={done} onClick={setDone} type="checkbox" id={"task"+index} />
      <label htmlFor={"task"+index}>{children}</label>
    </div>
  )
}

export default Checkbox