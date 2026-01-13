import './App.css'
import OpenLiveAccount from './pages/OpenLiveAccount'
import AuthLanding from './pages/AuthLanding'
import ClientPortalLogin from './pages/ClientPortalLogin'
import { Routes, Route } from 'react-router-dom'
import PlatformSelection from './pages/PlatformSelection'
import DepositModal from './pages/DepositModal'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='auth' element={<AuthLanding/>}/>
      <Route path='login' element={<ClientPortalLogin/>}/>
      <Route path='signup' element={<OpenLiveAccount/>}/>
    </Routes>
    <Routes>
      <Route path='/' element={<PlatformSelection/>}/>
      <Route path='start-trading' element={<DepositModal/>}/>
    </Routes>
    
    </>
  )
}

export default App
