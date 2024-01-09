import React from 'react'
import  "./Sidebar.css"
import { FaAngleDown } from "react-icons/fa6";
import Option from './Option';
import { optionData } from '../../Utils/optionData';
// import { optionData } from '../../assets/user.png';


const Sidebar = () => {

  const userimage = "/assets/user.png"
  return (
    <div className='sidebar-container'>
      <div className="profile">
        <div className="profile-icon">
            <img width={"90%"} src='/assets/user.png' alt="userimage"/>
            
        </div>
        <div className="profile-detail">
            <span className="user-name">Nishyan</span>
            <span className="store-link"> <a href="#">Visit store</a></span>
            <div className='underline'></div>
        </div>
        <div className="down-icon">
        <FaAngleDown style={{color:"white" ,scale:"1.1"}} />
        </div>
      </div>
      <div className="options">
        {optionData.map((option,index)=>{
            return <Option key={index} icon={option.icon} isSelected={index===6} title={option.title}/>

        })}
      </div>
      <div className="wallet">
            <div className="wallet-icon">
           
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="4" fill="white" fill-opacity="0.1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99995 9.79727C8.42319 9.79727 7.79995 10.3553 7.79995 11.2473V24.7473C7.79995 25.6393 8.42319 26.1973 8.99995 26.1973H27C27.5767 26.1973 28.2 25.6393 28.2 24.7473V21.8473H23C20.8737 21.8473 19.15 20.1236 19.15 17.9973C19.15 15.871 20.8737 14.1473 23 14.1473H28.2V11.2473C28.2 10.3553 27.5767 9.79727 27 9.79727H8.99995ZM29.7999 14.1473V11.2473C29.7999 9.65398 28.6323 8.19727 27 8.19727H8.99995C7.36758 8.19727 6.19995 9.65398 6.19995 11.2473V24.7473C6.19995 26.3405 7.36758 27.7973 8.99995 27.7973H27C28.6323 27.7973 29.7999 26.3405 29.7999 24.7473V21.8473H29.85V14.1473H29.7999ZM22 17.9473C22 17.4778 22.3806 17.0973 22.85 17.0973H24.15C24.6194 17.0973 25 17.4778 25 17.9473C25 18.4167 24.6194 18.7973 24.15 18.7973H22.85C22.3806 18.7973 22 18.4167 22 17.9473ZM20.85 17.9973C20.85 16.8099 21.8126 15.8473 23 15.8473H28.15V20.1473H23C21.8126 20.1473 20.85 19.1847 20.85 17.9973Z" fill="white"/>
</svg>

            </div>
            <div className="wallet-info">
                <span>Available credits</span>
                <span>222.10</span>
            </div>
      </div>

      
    </div>
  )
}

export default Sidebar
