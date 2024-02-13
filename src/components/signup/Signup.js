import React from "react";

import img1 from '../login/cooksoncall.png';
import './singup.css';
function Signup() {
  return (
    <div className="signup">
      <img src={img1} alt=""  style={{ width: '200px', height: '200px' }}/>
      <form className="forms">
      <h4 className="text-center ">SIGN UP</h4>

        <input
          type="text"
          placeholder="Name"
          name="Name"
          id="Name"
          required
          autoComplete="off"
          className="mt-4"
        />{" "}
        <br />
      
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
         
          required
          autoComplete="off"
          className="mt-4"
        />{" "}
        <br />
     
        <input
          type="password"
        
          placeholder="Password"
          name="password"
          id="password"
         
          required
          autoComplete="off"
          className="mt-4"
        />{" "}
        <br />
        <p className='text-center'>Are you a Cook or User ? <br />
        <input type="radio" />Cook <br />
        <input type="radio"  />User</p><br />
        <button type="submit" className="btn btn-info mx-auto d-block px-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
