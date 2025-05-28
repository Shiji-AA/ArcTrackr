import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './Components/Admin/AdminRegister';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminHomePage from './Pages/AdminHomePage';
import AddSiteVisit from './Components/Admin/AddSiteVisit';
import SiteVisitList from './Components/Admin/SiteVisitList';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/adminregister" element={<AdminRegister />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admindashboard" element={<AdminHomePage />} />
      <Route path="/addsitevisit" element={<AddSiteVisit/>} />
      <Route path="/sitevisits" element={<SiteVisitList/>} />
  
      </Routes>

    </Router>
   
  )
}

export default App
