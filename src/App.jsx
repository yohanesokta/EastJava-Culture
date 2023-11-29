import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import './style/app.css'
function App() {

  return (
    <>
        <Router>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
           </Routes>
        </Router>
    </>
  )
}

export default App
