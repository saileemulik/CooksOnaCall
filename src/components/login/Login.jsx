import React from 'react'
// import { Link } from 'react-router-dom';
import './login.css';
import img1 from '../login/cooksoncall.png';
// import { FaEnvelope, FaLock } from "react-icons/fa";
function Login() {
  return (
    <div className="login">
      {/* <h3 className="pt-4">LOGIN</h3>
      <FaUser className="icon" /> */}
      <img src={img1} alt=""  style={{ width: '200px', height: '200px' }}/>
      <form className="form">
        {/* <FaEnvelope className="color" /> */}
        <h4 className='text-center'>LOGIN</h4>
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
        {/* <FaLock className="color" /> */}
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
        <br />
        <p className='text-center'>Are you a Cook or User ? <br />
        <input type="radio" />Cook <br />
        <input type="radio"  />User</p><br />
        <button type="submit" className="btn btn-info mx-auto d-block px-5">
    Submit
</button>

      </form>
      <br />
      <h6 className="text-dark text-center">
        OR <br />
        Don't Have an Account?
      </h6>
      <button className="btn btn-dark mx-auto d-block px-5 center" type="button">
        {/* <Link
          to="/signup"
          className=" text-white"
          style={{ textDecoration: "none" }}
        >
          Signup
        </Link> */}
        Signup
      </button>
    </div>
  )
}

export default Login
