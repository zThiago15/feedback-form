import React, { FormEvent, useState } from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

import Map from '../assets/map.svg';
import greenCartoon from '../assets/greenCartoon.svg';
import pinkCartoon from '../assets/pinkCartoon.svg';
import yellowCartoon from '../assets/yellowCartoon.svg';

import { createContact } from '../services/contact';

import { StyledButton } from '../styles/button.style';
import { StyledFooter } from '../styles/footer.style';
import { StyledForm } from '../styles/form.style';
import { StyledInput, StyledTextarea } from '../styles/formFields.style';
import { StyledHeading } from '../styles/heading.style';
import { StyledMap } from '../styles/map.style';
import { StyledCartoon } from '../styles/cartoon.style';

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
            <StyledCartoon src={greenCartoon} alt="green cartoon" />
            <main>
                <StyledHeading>Reach out to us!</StyledHeading>
                <StyledForm
                    method="POST" 
                    onSubmit={(e: FormEvent) => validateForm(e)}
                >
                    <StyledInput 
                        placeholder="Your name*" 
                        value={name} onChange={({ target }) => setName(target.value)} 
                        required
                    />
                    <StyledInput
                        placeholder="Your e-mail*" 
                        value={email} onChange={({ target }) => setEmail(target.value)} 
                        required
                    />
                    <StyledTextarea 
                        placeholder="Your message*" 
                        value={message} 
                        onChange={({ target }) => setMessage(target.value)} 
                        required
                    ></StyledTextarea>
                    <StyledButton type="submit" disabled={disableBtn}>Send message</StyledButton>
                </StyledForm>
                <StyledMap src={Map} alt="map" />
            </main>
            <StyledFooter>
                <ImLinkedin2 width={`50px`} color="#696969" />
                <ImTwitter width={`50px`} color="#696969" />
                <ImInstagram width={`50px`} color="#696969" />
            </StyledFooter>
        </>
    );
}