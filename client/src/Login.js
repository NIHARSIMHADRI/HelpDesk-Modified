import './App.css';
import { useState, useEffect, useContext } from "react"
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate, Router, useNavigationType} from "react-router-dom"
import {UserContext} from "./UserContext.js"

function Login() {
    const [listOfUsers, setListOfUsers] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [failure, setFailure] = useState(true)
    const [userData, setUserData] = useState({})

    const context = useContext(UserContext)

    const navigate = useNavigate()

    const checkUser = async () => {
        const res = await fetch(`http://localhost:3001/users/${username}/${password}`);
        const data = await res.json();
        console.log(data)
        //console.log(data.username)
        if (data != null) {
            setFailure(false)
            setUserData(data)
        } else {
            setFailure(true)
        }
        //setListOfUsers(data);
    };

    function validateUser() {
        checkUser()
    }

    if (failure) {
        return (
            <div className="App">
    
                <h1 className="helpdesk-title">The Log In was {failure ? "true" : "false"}</h1>
    
                <div>
                    <div className='input-holder'>
                        <input type="text" placeholder='username...' onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                        <br />
                        <input type="text" placeholder='password...' onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </div>
                    <Button variant="primary" onClick={validateUser}>Create User</Button>
                </div>
            </div>
    
        );
    } else {
        return (
            <>
            {console.log("You doing anything?")}
            {context.modifyUser(userData)}
            {navigate(`/helpdesk/${username}`)}
            
            </>
        )
    }
}

export default Login;