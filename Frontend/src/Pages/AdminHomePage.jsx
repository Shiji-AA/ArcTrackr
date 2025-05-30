import React from 'react'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminFooter from '../Components/Admin/AdminFooter'

function AdminHomePage() {
    return (
        <div>
            <AdminNavbar/>
            <AdminDashboard/>            
            <AdminFooter/>            
        </div>
    )
}

export default AdminHomePage
