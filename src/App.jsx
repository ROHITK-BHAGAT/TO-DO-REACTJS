import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
 


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
  setTodos(todos)
  }
  
    
  }, [])
  

  const saveToLs=(params) =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }



  const handleEdit=(e,id)=>{
    let t = todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos=todos.filter(item=>{
      return item.id!==id
    });
    
    setTodos(newTodos)
    saveToLs()
  }
  const handleDelete=(e,id)=>{
    
    let newTodos=todos.filter(item=>{
      return item.id!==id
    });
    
    setTodos(newTodos)
    saveToLs()
  }
  const handleAdd=()=>{
    setTodos([...todos,{id: uuidv4(),todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
    saveToLs()
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
    
  }

  const handleCheckbox=(e)=>{
    let id=e.target.name;
    let index = todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs()
  }

  return (
    <>
    

      <div className="container   md:mx-auto my-5 rounded-xl p-5 bg-blue-300 font-bold min-h-[80vh] md:w-1/2">
      
      <h1 className='font-bold text-center text-3xl'>To-Do List</h1>
      <div className='mx-8 my-10'>
        <div className="addTodo my-5">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-3/4 rounded-lg px-5 py-1 my-2.5'/>
          <button onClick={handleAdd} disabled={todo.length<1}className='bg-blue-500 text-white rounded-md p-3 py-1 ml-2 md:mx-6'>Save</button>
        </div>
            <h2 className='text-lg '>Your Tasks</h2>
        <div className='todos'>
          {todos.length ===0 && <div className='m-5'>No Todo to display</div>}
          {todos.map(item=>{

          
          return <div key={item.id} className="todo flex justify-between md:w-3/4 my-3">
            <div className='flex gap-6 py-1'>
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted}  id=""   />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-blue-500 text-white rounded-md p-3 py-1 mx-1'><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-blue-500 text-white rounded-md p-3 py-1 mx-1'><MdDelete /></button>
            </div>
          </div>
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
