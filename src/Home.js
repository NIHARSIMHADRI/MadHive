import React from 'react';
//import './App.css'; // Add your CSS styles here
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
//import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import TutorLogin from "./tutor_login.js"

const Home = () => {
  return (
    <div className="container">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" style={{ marginLeft: '10px' }} href="#">
              MadHives
            </a>
            <div className="navbar-collapse collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="wave waveTop"
            style={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`,
            }}
          >
            <div className="card shadow-lg p-3 mb-5 bg-body">
              <div className="card-body">
                <h2 className="card-title">Welcome To MadHives</h2>
                <h3 style={{ textAlign: 'center' }}>I am a ...</h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <button
                    type="student"
                    className="btn btn-danger btn-login"
                    style={{
                      marginRight: '20px',
                      backgroundColor: '#C5050C',
                      height: '70px',
                      width: '150px',
                    }}
                    onClick={() => redirectToTutor('student_sign_in.html')}
                  >
                    Student
                  </button>
                  <button
                    type="tutor"
                    className="btn btn-danger btn-login"
                    style={{
                      backgroundColor: '#C5050C',
                      width: '150px',
                    }}
                    onClick={() => <TutorLogin />}
                  >
                    Tutor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`,
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const redirectToTutor = (url) => {
  // Implement your redirection logic here
  console.log(`Redirecting to ${url}`);
};

export default Home;
