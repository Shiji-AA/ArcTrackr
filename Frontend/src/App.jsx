import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './Components/Admin/AdminRegister';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminHomePage from './Pages/AdminHomePage';
import AddSiteVisit from './Components/Admin/AddSiteVisit';
import SiteVisitList from './Components/Admin/SiteVisitList';
import EditSiteVisit from './Components/Admin/EditSiteVisit';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-right"/>
      <Routes>
      <Route path="/adminregister" element={<AdminRegister />} />
      <Route path="/" element={<AdminLogin />} />
      <Route path="/admindashboard" element={<AdminHomePage />} />
      <Route path="/addsitevisit" element={<AddSiteVisit/>} />
      <Route path="/sitevisits" element={<SiteVisitList/>} />
      <Route path="/editsitevisit/:id" element={<EditSiteVisit/>} />
      </Routes>

    </Router>
   
  )
}

export default App
