import React from 'react'
import "./Table.css"
import { download, iball, searchIcon, sort, tableDateDown } from '../../Utils/Icons'
import Pagination from '../Pagination/Pagination.js';
const Table = () => {
  const tableInfo =  Array.from({ length: 20 });
  return (
    <div className='table'>
      <span className='table-heading'>Transactions | This Month</span>
      <div className="table-container">
        <div className="table-option">
        <div className="table-search">
        {searchIcon}
        <input type='text' placeholder={ "Seach by order ID... "}/>
      </div>
      <div className="table-option-right">
        <div className="sort">
          <span>Sort</span>
            {sort}
        </div>
        <div className="download">
          {download}
        </div>
      </div>
        </div>
          <table>
            <thead>
              <tr className='thead-tr'>
                <th>Order ID</th>
                <th style={{paddingLeft:"115px"}} >Order date{tableDateDown}</th>
                <th style={{paddingLeft:"85px"}} >Order amount</th>
                <th>Transaction fees {iball}</th>
              </tr>
            </thead>
          </table>
          <tbody>
            {tableInfo.map((info,index)=>{
                return (<tr className='table-data'>
                <td style={{color:"#146EB4"}}>#281209</td>
                <td >7 July, 2023</td>
                <td>₹1,278.23</td>
                <td>₹22</td>
              </tr>)
            })}
            
          </tbody>
           <Pagination/>
      </div>

    </div>
  )
}

export default Table
