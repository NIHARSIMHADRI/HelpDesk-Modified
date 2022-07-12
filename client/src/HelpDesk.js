import './App.css';
import {useState, useEffect} from "react"
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from "react-router-dom"
import { useContext } from 'react';
import {UserContext} from './UserContext';

function HelpDesk(props) {
    const context = useContext(UserContext)

    return (
        <>
        <h1>Welcome to your Helpdesk {context.username}</h1>
        </>
    )
}

export default HelpDesk