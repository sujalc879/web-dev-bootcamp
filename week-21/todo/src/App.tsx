import axios from "axios";
import { useEffect, useState } from "react"

function App() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos/")
      .then(res => setTodos(res.data))
    
    
    }, []);

  return <div style={{display : "flex", alignItems : "center", flexDirection : "column", gap : "5px"}}>
    {todos.map(todo => <Todo title={todo.title} completed={todo.completed}/>)}
  </div>
}

function Todo({ title, completed }: {title : string, completed: boolean}) {


  return <div style={{width : "90vw", border : "2px solid black", borderRadius : 5, backgroundColor : "gainsboro", padding : "10px", textAlign : "center"}}>
    <h2> Title : {title} </h2>
    <h3> Complete : {JSON.stringify(completed)}</h3>
  </div>
}

export default App
