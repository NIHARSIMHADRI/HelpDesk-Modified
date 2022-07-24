import './App.css';
import {useState, useEffect, useContext} from "react"
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate, useLocation, useParams} from "react-router-dom"
import {UserContext} from './UserContext';
import Header from "./Header"
import axios from "axios"

function HelpDesk(props) {
    const context = useContext(UserContext)
    const [name, setName] = useState("")
    const [logs, setLogs] = useState(null)
    const [data, setData] = useState(null)
    const location = useLocation()

    const params = useParams()

    
    useEffect(() => {
        fetch(`http://localhost:3001/users/${params.user}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setLogs(data.logs)
            setData(data)
            //console.log(data._id)
        })
    }, [])

    /*
    {logs && logs.map(log => {
        if (log.agentOption === false) {
           return <h1>{log.name}</h1>
        } else {
            return null
        }
    })}

    {console.log(logs.length)}
    */

    function deleteLog(event) {
        console.log(data._id)
        console.log(event.target.value)
        axios.delete(`http://localhost:3001/users/delete/${data._id}/${event.target.value}`)
        window.location.reload();
    }
    

    return (
        <>
        <Header username={params.user}/>
        <h1 className='centered'>Welcome to your Helpdesk {params.user}</h1>
        <br />
        <h2 className="centered">Here are the tickets assigned to you</h2>
        {(logs && data) && logs.map((log) => {
            if (log != null && log.name != null) {
                return <div className='ticket'>
                <h1>{log.agentAssign}</h1>
                <p>Category: {log.category}</p>
                <p>Subcategory: {log.subcategory}</p>
                <p>{log.desc}</p>
                <p>{log.id}</p>
                <button value={log.id} onClick={deleteLog}>Delete</button>
                </div>
            } else {
                return null
            }
        })}
        </>
    )
}

export default HelpDesk