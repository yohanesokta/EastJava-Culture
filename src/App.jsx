import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/home'
import './style/app.css'
import Test from './test'
import Isi from './Pages/isi'
import NotFound from "./Components/bundle/NotFound"
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

function App() {

  const ClientID = "649924286661-uug7ckbh0oi8ck108abfqj5pocfpks2g.apps.googleusercontent.com"
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId : ClientID,
        scope    : ""
      })
    }
    gapi.load('client:auth2',start)
  })
  return (
    <>
        <Router>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/page/:slug' element={<Isi />} />
            <Route path='*' element={<NotFound />} />
           </Routes>
        </Router>
    </>
  )
}

export default App
