import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaChevronUp } from 'react-icons/fa';
import { ColoredSpan } from '../Navbar/NavbarStyledComponent';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.card_light};
    padding: 20px;
    text-align: center;
    position: relative;
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
`;

const FooterLink = styled.span`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

const SocialIcon = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const BackToTopButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(100px)')};
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.card_light};
    }
`;

const Footer = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const footerRef = useRef(null);
    const navigate = useNavigate();

    const handleScroll = useCallback((hash) => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleNavigation = useCallback(
        (path, hash) => {
            navigate(path);
            setTimeout(() => handleScroll(hash), 100);
        },
        [navigate, handleScroll]
    );

    const handleScrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleScrollVisibility = useCallback(() => {
        if (footerRef.current) {
            const footerRect = footerRef.current.getBoundingClientRect();
            setIsButtonVisible(footerRect.top < window.innerHeight && footerRect.bottom >= 0);
        }
    }, []);

    useEffect(() => {
        handleScrollVisibility();
        const debouncedHandleScrollVisibility = () => {
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(handleScrollVisibility, 100);
        };

        window.addEventListener('scroll', debouncedHandleScrollVisibility);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScrollVisibility);
        };
    }, [handleScrollVisibility]);

    return (
        <>
            <FooterContainer ref={footerRef}>
                <FooterLinks>
                    <FooterLink onClick={() => handleNavigation('/', '#skills')}>
                        Skills
                    </FooterLink>
                    <FooterLink onClick={() => handleNavigation('/', '#projects')}>
                        Projects
                    </FooterLink>
                </FooterLinks>
                <SocialIcons>
                    <SocialIcon href="https://github.com/[YourProfile]" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </SocialIcon>
                    <SocialIcon href="https://www.twitch.tv/[YourProfile]" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </SocialIcon>
                    <SocialIcon href="https://discord.com/users/[YourProfile]" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/[YourProfile]/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </SocialIcon>
                </SocialIcons>
                <div>
                    <ColoredSpan>© 2024</ColoredSpan>
                </div>
            </FooterContainer>
            <BackToTopButton onClick={handleScrollToTop} isVisible={isButtonVisible}>
                <FaChevronUp />
                <span>Top</span>
            </BackToTopButton>
        </>
    );
};

export default Footer;
