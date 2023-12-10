import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/home'
import './style/app.css'
import Test from './test'
import Isi from './Pages/isi'
function App() {

  return (
    <>
        <Router>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/page/:slug' element={<Isi />} />
           </Routes>
        </Router>
    </>
  )
}

export default App
