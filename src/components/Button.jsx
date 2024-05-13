import React from 'react'

const Button = ({variant,children,index, setTasks, tasks}) => {
  const deleteTask = () => {
    const newTasks = tasks.filter((_,i) => i!==index)
    setTasks(newTasks)
  }
  return (
    <button onClick={variant==='small' ? deleteTask : undefined} className={variant==='small'?'small':'big'}>{children}</button>
  )
}

export default Button