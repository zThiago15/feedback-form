import React from 'react';

export default function Form() {
    return (
        <main>
            <h1>Reach out to us!</h1>
            <form method="POST">
                <input placeholder="Your name*" />
                <input placeholder="Your e-mail*" />
                <textarea placeholder="Your message*"></textarea>
                
                <button type="submit">Send message</button>
            </form>
        </main>
    );
}