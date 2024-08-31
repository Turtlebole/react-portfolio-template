import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 38px;
    text-align: center;
    font-weight: 400;
    margin-top: 20px;
    color: ${({ theme }) => theme.colored_detail};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const ViewToggleButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    gap: 12px;

    @media (max-width: 1024px) and (min-width: 768px) {
        display: none;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    width: calc(100% - 40px);
    max-width: 1350px;
    transform: translateY(-50%);
    pointer-events: none;
    gap: 16px;

    & > div:first-child {
        margin-left: 20px;
    }
    & > div:last-child {
        margin-right: -20px;
    }

    @media (max-width: 1200px) {
        position: static;
        top: auto;
        transform: none;
        margin-top: 20px;
        width: 100%;
        justify-content: center;
        gap: 12px;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        display: none; 
    }

    @media (max-width: 768px) {
        display: none; 
    }
`;


export const ToggleButtonGroupMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        gap: 16px;
    }
`;

export const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1350px;
    overflow: hidden;

    @media (max-width: 768px) {
        overflow-x: auto;
        white-space: nowrap;
        padding: 0 20px;
    }
`;

export const ToggleButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    background: ${({ theme }) => theme.primary + '20'};
    color: ${({ theme }) => theme.darkMode ? '#FFFFFF' : '#000000'};
    pointer-events: all;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background: ${({ theme }) => theme.primary + '60'};
        transform: scale(1.1);
    }

    @media (max-width: 1200px) {
        font-size: 20px;
        padding: 12px;
    }

    @media (max-width: 768px) {
        padding: 14px;
        font-size: 24px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 20px;

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0 40px;
    }
`;

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.text_secondary};
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s;
    cursor: pointer;
    max-width: 1100px;
    position: relative;
    padding-right: 100px;

    &:hover {
        background-color: ${({ theme }) => theme.card_light};
        transform: scale(0.99);
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;

        & > img {
            margin-right: 0;
            margin-bottom: 16px;
        }
    }

    & > img {
        width: 16.666%;
        height: auto;
        border-radius: 6px;
        margin-right: 16px;
        object-fit: contain;
        border: 2px solid ${({ theme }) => theme.text_secondary};
    }
`;

export const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 120px);
    align-items: center;
    margin-bottom: 10px;
`;

export const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.primary};
    flex-grow: 1;
`;

export const PostDate = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text_secondary};
    position: absolute;
    top: 12px;
    right: 16px;
    width: 100px;
    text-align: right;
`;

export const PostDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    max-height: 4.5rem;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
`;

export const Tag = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text_secondary};
    background-color: ${({ theme }) => theme.colored_detail + '20'};
    padding: 4px 8px;
    border-radius: 5px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`;

export const LeftArrowSVG = styled.svg.attrs({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
})`
    path {
        stroke: ${({ theme }) => theme.highlighted_svg};
    }
`;

export const RightArrowSVG = styled.svg.attrs({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
})`
    path {
        stroke: ${({ theme }) => theme.highlighted_svg};
    }
`;

export const LeftArrowPath = () => (
    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
);

export const RightArrowPath = () => (
    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
);
