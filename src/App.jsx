import { Route, Routes } from 'react-router-dom'
import './App.css'
import ToDo from './components/ToDo'
import Menu from './pages/Menu'
import Home from './pages/Home'


function App() {
 

  return (
    <>
     <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='/todo' element={<ToDo/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App

