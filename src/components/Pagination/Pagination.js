import React from 'react'
import "./Pagination.css"
import { pageNext, pagePrev } from '../../Utils/Icons'
const Pagination = () => {
  return (
    <div className='pagination-container'>
      <div className="page-btn">
        {pagePrev}
        <span>Previous</span>
      </div>
      <div className="pages">
        <span className='page-no'>1</span>
        <span className='page-no'>...</span>
        <span className='page-no page-selected' >10</span>
        <span className='page-no' >11</span>
        <span className='page-no' >12</span>
        <span className='page-no' >13</span>
        <span className='page-no' >14</span>
        <span className='page-no' >15</span>
        <span className='page-no' >16</span>
        <span className='page-no' >17</span>
        <span className='page-no' >18</span>
      </div>
      <div className="page-btn">
        <span>Next</span>
        {pageNext}
      </div>
    </div>
  )
}

export default Pagination
