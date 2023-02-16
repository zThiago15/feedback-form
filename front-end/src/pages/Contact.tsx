import React, { FormEvent, useState } from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import Map from '../assets/map.svg';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateForm = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <>
            <main>
                <h1>Reach out to us!</h1>
                <form method="POST" onSubmit={(e) => validateForm(e)}>
                    <input 
                        placeholder="Your name*" 
                        value={name} onChange={({ target }) => setName(target.value)} 
                        required
                    />
                    <input
                        placeholder="Your e-mail*" 
                        value={email} onChange={({ target }) => setEmail(target.value)} 
                        required
                    />
                    <textarea 
                        placeholder="Your message*" 
                        value={message} 
                        onChange={({ target }) => setMessage(target.value)} 
                        required
                    ></textarea>
                    
                    <button type="submit">Send message</button>
                </form>
            </main>
            <img width="20px" src={Map} alt="map " />
            <footer>
                <ImLinkedin2 />
                <ImTwitter />
                <ImInstagram />
            </footer>
        </>
    );
}