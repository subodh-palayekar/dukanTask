import React from 'react'
import "./Sidebar.css"

const Option = ({icon,title,isSelected}) => {
  return (
    <div className={`options-container ${ isSelected ? 'selected':''}`}>
       {icon}
       <span> {title}</span>
    </div>
  )
}

export default Option
 