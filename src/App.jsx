import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'

import NavBar from './Components/NavBar'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/workouts' element={<Index/> } />
            <Route path='/workouts/:id' element={<Show/> } />
            <Route path='/workouts/:id/edit' element={ <Edit/>} />
            <Route path='/workouts/new' element={<New/> } />
            <Route path='*' element={ <FourOFour/>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
