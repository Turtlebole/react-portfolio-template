import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 1;
    background: transparent;
    @media (max-width: 960px) {
        padding: 20px 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 40px 20px;
    background-color: transparent;
    border-radius: 12px;
    gap: 20px;
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 400px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ContactForm = styled.form`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    padding: 24px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    gap: 12px;
    @media (max-width: 768px) {
        padding: 16px;
    }
`;

const ContactTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    padding: 10px;
    border-radius: 6px;
    transition: border-color 0.3s ease-in-out;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    width: 100%;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    padding: 10px;
    border-radius: 6px;
    resize: vertical;
    transition: border-color 0.3s ease-in-out;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.buttonGradient};
    padding: 12px;
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        filter: brightness(1.15);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
    }
`;

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        emailjs.sendForm('[Your_Service_ID]', '[Your_Template_ID]', form.current, '[Your_User_ID]')
            .then(() => {
                setOpen(true);
                setErrorMessage('');
                form.current.reset();
            })
            .catch((error) => {
                console.error(error.text);
                setErrorMessage('Failed to send the email. Please try again later.');
                setOpen(true);
            });
    }, []);

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Your description</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Message me</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" type="email" required aria-label="Your Email" />
                    <ContactInput placeholder="Your Name" name="from_name" required aria-label="Your Name" />
                    <ContactInput placeholder="Subject" name="subject" required aria-label="Subject" />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" required aria-label="Message" />
                    <ContactButton type="submit">Send</ContactButton>
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message={errorMessage || "Email sent successfully!"}
                    severity={errorMessage ? "error" : "success"}
                />
            </Wrapper>
        </Container>
    );
};

export default Contact;
