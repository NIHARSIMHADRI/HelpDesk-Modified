import './App.css';
import {useState, useEffect, useContext} from "react"
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate, useLocation} from "react-router-dom"
import {UserContext} from './UserContext';
import Header from "./Header"

function HelpDesk(props) {
    const context = useContext(UserContext)
    const [name, setName] = useState("")
    const location = useLocation()

    /*
    useEffect(() => {
        if (context.username !== "") {
            console.log("true")
            setName(context.username)
        }
    }, [context.username])
    */

    return (
        <>
        <Header username={location.state.username}/>
        <h1 className='centered'>Welcome to your Helpdesk {location.state.username}</h1>
        </>
    )
}

export default HelpDesk