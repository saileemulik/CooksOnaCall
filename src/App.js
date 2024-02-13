import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // corrected import
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Cook from './components/cooks/Cook';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className='App'>
    <div className="AppGlass">
    <Sidebar/>
   <div>
   <Login/>
    <Signup/>
    <Cook/>
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router> */}
   </div>
    </div>
    </div>
  );
}

export default App;
