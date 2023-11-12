import React from 'react';
//import './App.css'; // Add your CSS styles here
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import {useNavigate} from "react-router-dom"
import TutorLogin from "./tutor_login.js"
import {Nav, Navbar} from "react-bootstrap"

const Home = () => {

const navigate = useNavigate()

  return (
    <div className="container">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <Navbar bg="color" variant="dark">
                <Navbar.Brand>
                    {/* <img styles={{width: 250, height: 250}} src={logo} alt="help pic"/> */}
                    
                </Navbar.Brand>

                <Nav>
                    <Nav.Link href={`/`}>MadHives</Nav.Link>
                    <Nav.Link href={`/about`}>About</Nav.Link>
                    <Nav.Link href={`/`}>Home</Nav.Link>
                </Nav>
            </Navbar>
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
                    onClick={() => navigate("/student_login")}
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
                    onClick={() => navigate("/tutor_login")}
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
