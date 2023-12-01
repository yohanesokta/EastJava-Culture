import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import './style/app.css'
import Jasa from './Pages/jasa'
function App() {

  return (
    <>
        <Router>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pages/about' element={<About/>} />
            <Route path='/pages/jasa' element={<Jasa/>} />
           </Routes>
        </Router>
    </>
  )
}

export default App
