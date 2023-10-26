import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NavBar from './Layout/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route index element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
