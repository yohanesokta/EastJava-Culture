import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/app.css'
import Isi from './Pages/Page'
import NotFound from "./Components/bundle/NotFound"
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import HomePage from './Pages/HomePage'
import PageDestinasi from './Pages/PageDestinasi'
import FeedBack from './Pages/FeedBack'
import Kerajinan from './Elements/Container/Kerajinan'
import Kuliner from './Elements/Container/Kuliner'

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
          <Route path='/kerajinan/' element={<Kerajinan/>} />
          <Route path='/kuliner' element={<Kuliner/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
