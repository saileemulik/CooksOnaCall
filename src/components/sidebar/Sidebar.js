import React, { useState } from 'react';
import './sidebar.css';
// import {UilEstate} from "@iconscout/react-unicons";
import img1 from '../login/cooksoncall.png';
import { SidebarData } from '../Data/Data';
const Sidebar = () => {
    const [selected, setSelected]=useState(0)
  return (
    <div className="sidebar">
        <div className="logo">
        <img src={img1} alt=""  style={{ width: '200px', height: '200px' }}/>
        </div>
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected===index?'item active': 'item'} key={index}
                    onClick={()=>setSelected(index)}>
                    <item.icon/>
                <span>{item.heading}</span>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar
