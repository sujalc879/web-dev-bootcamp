import axios from "axios"
import { useEffect, useState } from "react"

function App() {

    const [data, setData] = useState(1);


  return <div>
    <button onClick={() => {setData(1)}}>1</button>
    <button onClick={() => {setData(2)}}>2</button>
    <button onClick={() => {setData(3)}}>3</button>
    <LinkedInPost data={data}/>
  </div>
}

interface TodoProps {
  data : number
}

function LinkedInPost({ data }: TodoProps) {
  const [currentTodo, setCurrentTodo] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/" + data)
    .then(res => setCurrentTodo(res.data.title));
    
    const clock = setInterval(() => {
      console.log("current todo id is : " + data);
      
    }, data * 1000);

    return () => {
      clearInterval(clock);
    }
  }, [data])

  return <div style={{ border: "2px solid black", backgroundColor : "green", color : "white", padding : "5px", textAlign : "center", margin : "5px 5px"}}>
    
    <h2> {currentTodo} </h2>
  </div>
}

export default App
