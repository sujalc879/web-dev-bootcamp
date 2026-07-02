import { BrowserRouter, Route, Routes } from 'react-router'
import { Auth } from './screens/Auth'
import { Board } from './screens/Board'
import { Dashboard } from './screens/Dashboard'

function App() {

  return <div >
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/board/:boardId' element={<Board />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
