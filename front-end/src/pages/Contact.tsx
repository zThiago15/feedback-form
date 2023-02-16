import React from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

export default function Form() {
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
            <footer>
                <ImLinkedin2 />
                <ImTwitter />
                <ImInstagram />
            </footer>
        </>
    );
}