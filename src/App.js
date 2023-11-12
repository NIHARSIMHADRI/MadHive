//import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from "react-router-dom"
import Home from "./Home.js"
import TutorLogin from "./tutor_login.js"
import StudentLogin from "./student_login.js"
import StudentSignup from "./student_signup.js"
import TutorSignup from "./tutor_signup.js"
import { UserProvider } from "./UserContext.js"
import { useEffect } from "react"

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tutor_login" element={<TutorLogin />} />
          <Route exact path="/student_login" element={<StudentLogin />} />
          <Route exact path="/student_signup" element={<StudentSignup />} />
          <Route exact path="/tutor_signup" element={<TutorSignup />} />
        </Routes>
    </Router>

  );
}

export default App;
