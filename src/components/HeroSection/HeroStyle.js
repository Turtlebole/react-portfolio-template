import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    height: 100vh; 
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -1; /* Ensures it's behind other content */
    canvas {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    @media (max-width: 960px) {
        justify-content: center;
        padding: 0;
    }
`;

export const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
export const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-top:5vh;
        margin-bottom: 10vh;
    }

    @media (max-width: 640px) {
        margin-top: 15vh;
    }
`;

export const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 450px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colored_detail};
    animation: glow 1.5s infinite alternate;
    object-fit: cover;
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }

    @keyframes glow {
        0% {
            box-shadow: 0 0 15px 0 ${({ theme }) => theme.colored_detail};
        }
        100% {
            box-shadow: 0 0 20px 10px ${({ theme }) => theme.colored_detail};
        }
    }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

export const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

export const ResumeButton = styled.a`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: ${({ theme }) => theme.buttonGradient};
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: scale(1.2);
        filter: brightness(1.2);
    }
`;

export const ResumeButtonComponent = () => {
    const handleDownload = (event) => {
        event.preventDefault();
        const fileUrl = '/CV/CV.pdf';
        const fileName = 'CV.pdf';

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <ResumeButton href="#" onClick={handleDownload}>
            Download CV
        </ResumeButton>
    );
};