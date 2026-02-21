import { Route, Routes } from 'react-router-dom'
import './index.css'
import Profilepage from './pages/Profilepage'
import SettingPage from './pages/SettingPage'
import FundingPage from './pages/FundingPage'
import BankAccounts from './pages/BankAccounts'
import Beneficiaries from './pages/Beneficiaries'
import CardPayments from './pages/CardPayments'
import Fundinghistroy from './pages/Fundinghistroy'
import Refunds from './pages/Refund'


function App() {
  return (
    <Routes>
   <Route path='/' element={<Profilepage/>}/>
   <Route path='/setting' element={<SettingPage/>}/>
   <Route path='/funding' element={<FundingPage/>}/>
   <Route path='/bankaccount' element={<BankAccounts/>}/>
   <Route path='/cardpayment' element={<CardPayments/>}/>
   <Route path='/beneficiaries' element={<Beneficiaries/>}/>
   <Route path='/fundinghistroy' element={<Fundinghistroy/>}/>
   <Route path='/refund' element={<Refunds/>}/>
   </Routes>
   
  )
}

export default App
