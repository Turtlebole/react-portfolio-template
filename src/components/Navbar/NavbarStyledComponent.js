import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 1rem;
    position: absolute;
    width: 100%; /* Ensure it spans the full width */
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;
    border-bottom: 1px solid ${({ theme }) => theme.text_secondary};
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 16px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: auto;
    padding: 0 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0;
    }
`;

export const Span = styled.div`
    color: ${({ theme }) => theme.text_primary};
    padding: 0 4px;
    font-weight: bold;
    font-size: 16px;
`;

export const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.colored_detail};
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0;
    list-style: none;
    margin: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const GitHubButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 16px;
    font-weight: 500;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.6s ease-in-out;
    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.bgLight};  
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;


export const ThemeButton = styled.button`
    padding: 5px 10px;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colored_detail};
    }
    &:hover svg {
        fill: ${({ theme }) => theme.bg};
    }
`;

export const LightBulbIcon = styled.i``;

export const ButtonContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 12px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 12px 20px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileMenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const MobileMenuLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileMenuButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 16px;
    font-weight: 500;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.6s ease-in-out;
    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;

export const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileNavLogo = styled(LinkR)`
    width: auto;
    padding: 0 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0;
    }
`;
