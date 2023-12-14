import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import './style/app.css'
import Test from './test'
import Isi from './Pages/Page'
import NotFound from "./Components/bundle/NotFound"
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import HomePage from './Pages/HomePage'
import PageDestinasi from './Pages/PageDestinasi'
import FeedBack from './Pages/FeedBack'

function App() {

  const ClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: ClientID,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/destinasi/' element={<PageDestinasi />}/>
          <Route path='/destinasi/:slug' element={<Isi />} />
          <Route path='/feedback/' element={<FeedBack/>}/>
          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
