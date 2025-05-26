import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './Components/Admin/AdminRegister';
import AdminLogin from './Components/Admin/AdminLogin';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/adminregister" element={<AdminRegister />} />
       <Route path="/admin" element={<AdminLogin />} />
      </Routes>

    </Router>
   
  )
}

export default App
