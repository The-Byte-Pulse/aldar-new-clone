import { Route, Routes } from 'react-router-dom'
import './index.css'
import Profilepage from './page/Profilepage'
import SettingPage from './page/SettingPage'
import FundingPage from './page/FundingPage'
import BankAccounts from './page/BankAccounts'
import Beneficiaries from './page/Beneficiaries'
import CardPayments from './page/CardPayments'
import Fundinghistroy from './page/Fundinghistroy'


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
   </Routes>
   
  )
}

export default App
