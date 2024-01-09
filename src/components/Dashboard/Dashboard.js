import React from 'react'
import "./Dashboard.css"
import Sidebar from '../Sidebar/Sidebar.js'
import Navbar from '../Info-page/Navbar.js'
import Overview from '../Info-page/Overview.js'
import Table from '../Info-page/Table.js'
import Pagination from '../Pagination/Pagination.js'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className='info-page'>
        <Navbar/>
        <Overview/>
        <Table/>
      </div>
    </div>
  )
}

export default Dashboard
