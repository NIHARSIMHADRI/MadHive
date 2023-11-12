
import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

const TutorLogin = () => {
  return (
    <div className="container">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" style={{ marginLeft: '10px' }} href="index.html">
              MadHives
            </a>
            <div className="navbar-collapse collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-light" href="Tutor_sign_up.html">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="wave waveTop"
            style={{ backgroundImage: "url('your-top-wave-image-url')" }}
          >
            <div className="card shadow-lg p-3 mb-5 bg-body">
              <div className="card-body">
                <h5 className="card-title">Tutor Login</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
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
