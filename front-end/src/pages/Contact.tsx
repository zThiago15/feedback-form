import React from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import Map from '../assets/map.svg';

export default function Contact() {
    return (
        <>
            <main>
                <h1>Reach out to us!</h1>
                <form method="POST">
                    <input placeholder="Your name*" />
                    <input placeholder="Your e-mail*" />
                    <textarea placeholder="Your message*"></textarea>
                    
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