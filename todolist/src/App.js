
import './App.css';
import {useState} from "react"

function App() {
  const days = [ "Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
  
  const [toDos,setToDos]=useState([]) //list of todos as arrays in state
  const [toDo,setTodo]=useState("")//input field state for validation
  const [cancelled,setCancelled]=useState([])
 

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {days[new Date().getDay()]} 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{setToDos([...toDos,{id:Date.now(),text:toDo,status:false,deleted:false}])}} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {toDos.map((obj)=>{
          if(obj.deleted!==true){
      return(
        
      <div className="todo">
        <div className="left">
         
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))

          }}  value={obj.status}type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i onClick={()=>{
            
            setToDos(
              toDos.filter((toDoItem) => {
                if (toDoItem.id === obj.id) {
                  toDoItem.deleted = true;
                  !toDoItem.status &&
                    setCancelled([...cancelled, toDoItem.text]);
                }
                return toDoItem;
              })
            );
            
          }} className="fas fa-times"></i>
        </div>
      </div>)
 }
 return null
  })}
      <div className="history">
       <h3>Active task</h3>
      {
        toDos.map((obj)=>{
          if(obj.status !==true && obj.deleted !==true){
            return(
              <p key={obj.id}>{obj.text}</p>
            )
          }
          return (null)
  })
      }
     </div>
     <div className="history">
       <h3>completed task</h3>
       {
         toDos.map((obj=>{
           if(obj.status===true){
           return (
             <p >{obj.text}</p>

           )}
           return null
         }))
       }

     </div>
     <div className="history">
       <h3>cancelled task</h3>
       {
         cancelled.map((obj)=>{
           return(
             <p key={obj.id}>{obj}</p>
           )

         })
       }

     </div>
    </div>
  </div>
   );
}

export default App;
