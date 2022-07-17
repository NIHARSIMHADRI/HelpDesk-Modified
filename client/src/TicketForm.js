import React, {useState} from "react";

export default function TicketForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className="ticket-form">
            <label htmlFor="form-name">Name: </label>
            <input type="text" id="form-name" placeholder="Customer's Name" onChange={event => setName(event.target.value)}/>
            <br />
            <label htmlFor="form-email">Email: </label>
            <input type="email" id="form-email" placeholder="Customer's Email" onChange={event => setEmail(event.target.value)}/>
            <h1>This is where the ticket will be filled out</h1>
        </div>
    )
}

