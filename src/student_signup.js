import React, { useState } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import {Nav, Navbar} from "react-bootstrap"
import axios from 'axios'

const StudentSignup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const verifyUser = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        const personObj = {firstName, lastName, email}

        try {
            // Make a POST request to your Flask server
            console.log("submitting form...")
            const headers = {
             'Access-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
             'Access-Control-Allow-Headers': 'Content-Type',
             'Referrer-Policy': 'no-referrer'
            }
            await axios.post('http://localhost:8000/mongo_connect/check_process', {data: personObj}, {headers: headers});
            // response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            // response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
            // response.headers.add('Access-Control-Allow-Origin', '*')
            console.log('Data posted successfully');
          } catch (error) {
            console.error('Error posting data:', error);
          }
            }

    //     try {
    //         console.log("submitting form...")
    //         const response = await fetch('http://localhost:5000/mongo_connect/student_post', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({ data: firstName }),
    //         });
      
    //         if (response.ok) {
    //           console.log('Data posted successfully');
    //         } else {
    //           console.error('Error posting data:', response.statusText);
    //         }
    //       } catch (error) {
    //         console.error('Error posting data:', error);
    //       }
    //   };

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
                    <Nav.Link href={`/student_login`}>Student Login</Nav.Link>
                </Nav>
          </Navbar>
          <div
            className="wave waveTop"
            style={{ backgroundImage: "url('your-top-wave-image-url')" }}
          >
            <div className="card shadow-lg p-3 mb-5 bg-body">
              <div className="card-body">
                <h5 className="card-title">Student Login</h5>
                <form onSubmit={verifyUser}>
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Enter your first name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Enter your last name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
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
                    Signup

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

export default StudentSignup;