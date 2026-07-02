import { useRef, useState } from "react"


function App() {
  const [currentClock, setCurrentClock] = useState(0);
  const interval = useRef(0);

  function start() {
    interval.current = setInterval(() => {
      setCurrentClock(c => c + 1)
    }, 1000);
  }

  function stop() {
    clearInterval(interval.current)
  }
  return <div>
    <div> {currentClock} s </div>
    <button onClick={start}> start </button>
    <button onClick={stop}> stop </button>
  </div>
}


export default App
