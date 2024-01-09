import React from 'react'

const Overview = () => {
  return (
    <div className='overview-container'>
      <div className="overview-top">
        <span>Overview</span>
        <div className='select'>
        <select>
          <option>Last Month</option>
          <option>This Month</option>
        </select>
        </div>
      </div>

      <div className="overview-bottom">
        <div className="overview-tab">
          <span>Online orders</span>
          <span>231</span>
        </div>
        <div className="overview-tab">
          <span>Amount received</span>
          <span>₹23,92,312.19</span>
        </div>
      </div>
      
    </div>
  )
}

export default Overview

