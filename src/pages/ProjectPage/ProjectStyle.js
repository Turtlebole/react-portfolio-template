import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(343.07deg, hsla(231, 17%, 36%, 0.06) 5.71%, hsla(231, 17%, 36%, 0) 64.83%);
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    @media (min-width: 961px) {
        padding: 40px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    gap: 20px;

    @media (min-width: 961px) {
        flex-direction: row;
        gap: 40px;
    }
`;

export const LeftContainer = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.card};
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 960px) {
        order: 2;
    }
`;

export const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 960px) {
        order: 1;
    }
`;

export const ImageContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;

    @media (max-width: 960px) {
        padding: 10px;
        max-width: 400px;
    }

    @media (max-width: 640px) {
        padding: 5px;
        max-width: 280px;
    }
`;

export const Img = styled.img`
    width: 100%;
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
`;

export const ProjectTitle = styled.h2`
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    font-size: 24px;

    @media (max-width: 960px) {
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media (max-width: 640px) {
        font-size: 18px;
        margin-bottom: 5px;
    }
`;

export const SubTitle = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 30px;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
    padding: 0 20px;

    @media (max-width: 960px) {
        font-size: 16px;
    }

    @media (max-width: 640px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.colored_detail};
`;

export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    padding: 20px;
    justify-content: center;
`;

export const Tag = styled.span`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    background-color: ${({ theme }) => theme.colored_detail + 20};
    padding: 2px 8px;
    border-radius: 10px;
`;

export const GitHubLink = styled.a`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const GitHubIcon = styled.button`
    padding: 5px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
        width: 32px;
        height: 32px;
        fill: ${({ theme }) => theme.colored_detail};
    }

    &:hover svg {
        fill: ${({ theme }) => theme.primary};
    }
`;
