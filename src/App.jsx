import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import './style/app.css'
import Test from './test'
function App() {

  return (
    <>
        <Router>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pages/about' element={<About/>} />
            <Route path='/pages/test' element={<Test />} />
           </Routes>
        </Router>
    </>
  )
}

export default App
