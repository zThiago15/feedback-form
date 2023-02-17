import React, { FormEvent, useState } from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import Map from '../assets/map.svg';
import { createContact } from '../services/contact';
import { StyledButton } from '../styles/button.style';
import { StyledMap } from '../styles/map.style';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateForm = async (e: FormEvent) => {
        e.preventDefault();
        const response = await createContact({ name, email, message });
        
        if (response == 201) {
            alert('Feedback sent successfully!');
        } else {
            alert('Error: something went wrong');
        }

        location.reload();
    }

    const disableBtn = !name || !email || !message;

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
                    <StyledButton type="submit" disabled={disableBtn}>Send message</StyledButton>
                </form>
                <StyledMap src={Map} alt="map" />
            </main>
            <footer>
                <ImLinkedin2 />
                <ImTwitter />
                <ImInstagram />
            </footer>
        </>
    );
}