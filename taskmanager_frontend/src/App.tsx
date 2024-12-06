import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/auth" Component={LoginPage}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
