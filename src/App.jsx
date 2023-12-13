import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import './style/app.css'
import Test from './test'
import Isi from './Pages/isi'
import NotFound from "./Components/bundle/NotFound"
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import HomePage from './Pages/HomePage'

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
          <Route path='/page/:slug' element={<Isi />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
