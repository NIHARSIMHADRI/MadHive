import React, { useState } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import {Nav, Navbar} from "react-bootstrap"

const TutorLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <Nav.Link href={`/tutor_signup`}>Tutor Signup</Nav.Link>
                </Nav>
          </Navbar>
          <div
            className="wave waveTop"
            style={{ backgroundImage: "url('your-top-wave-image-url')" }}
          >
            <div className="card shadow-lg p-3 mb-5 bg-body">
              <div className="card-body">
                <h5 className="card-title">Tutor Login</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger btn-login"
                    style={{ backgroundColor: '#C5050C' }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{ backgroundImage: "url('your-middle-wave-image-url')" }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{ backgroundImage: "url('your-bottom-wave-image-url')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TutorLogin;
