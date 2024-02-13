import React from 'react';
import './cook.css';
import Receipe from './Receipe';
function Cook() {
  return (
    <>
        <div className="dashboard">
      <header>
        <h1>Cook's Dashboard</h1>
        {/* Add any other header content here */}
      </header>
      <div className="main-content">
        <Receipe/>
      </div>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
    </>
  )
}

export default Cook
