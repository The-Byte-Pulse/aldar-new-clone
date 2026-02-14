import { Route, Routes } from 'react-router-dom'
import './index.css'
import Profilepage from './page/Profilepage'
import SettingPage from './page/SettingPage'

function App() {
  return (
    <Routes>
   <Route path='/' element={<Profilepage/>}/>
   <Route path='/setting' element={<SettingPage/>}/>
   </Routes>
  )
}

export default App
