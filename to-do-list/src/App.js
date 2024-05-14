import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo.js";
import Start from "./Start.js";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Todo/>
    // <Start/>
    //<LogIn/>
    //<SignUp/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/Todo" element={<Todo />} />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
