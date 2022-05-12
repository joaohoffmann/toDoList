import { useState } from "react"
import { TodoItems } from "./TodoItem"

export const TodoList = (props) => {
  const defaultListItems = [
    {name: 'Tarefa 1', isCompleted: true},

  ]
  const [items, setItems] = useState(defaultListItems)
  const [taskValue, setTaskvalue] = useState('')
  const handleTaskValue = (event) => {
    if(items.find(i => i.name === taskValue)){
      event.preventDefault();
      setTaskvalue('')
      return (alert('Já existe uma tarefa com esse nome, por favor insira outro nome.'))

    }
    setItems([...items, {name: taskValue, isCompleted: false} ])
    setTaskvalue('')
    event.preventDefault();
  }

  const onTaskChanged = (event, item) =>{
    setItems(items.map(i => {
      if (i.name === item.name) {
        return{
          ...i,
          isCompleted:event.target.checked
        }
      }
      return i
    }))
  }
  return(
    <div className="to-do-list-container">
      <p>{items.filter(i => i.isCompleted).length} done! Nice Job!</p>
      <form onSubmit={handleTaskValue}>
        <input placeholder="Qual a próxima tarefa?"
        type="text" 
        value={taskValue}
        onChange={(e)=> setTaskvalue(e.target.value)}
        />
        <button type="submit">Adcionar Tarefa</button>
      </form>

     <ul>
        {items.map(item => <TodoItems onTaskChanged={onTaskChanged} item={item}/> )}
      </ul>
    </div>
  )
}
