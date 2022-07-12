import './App.css';
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom"
import Home from "./Home.js"
import Login from "./Login.js"
import SignUp from "./SignUp.js"
import HelpDesk from "./HelpDesk.js"
import { UserProvider } from "./UserContext.js"

function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/helpdesk/:user" element={<HelpDesk />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>

  );
}

export default App;
