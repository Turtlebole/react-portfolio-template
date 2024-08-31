import React from 'react';
import HeroAnimation from './HeroAnimation';
import {
    HeroContainer,
    HeroLeftContainer,
    Img,
    HeroRightContainer,
    HeroInnerContainer,
    TextLoop,
    Title,
    Span,
    SubTitle,
    ResumeButtonComponent
} from './HeroStyle';
import HeroImg from '../../images/avatar.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = ({ theme }) => {
    return (
        <div id="about">
            <HeroContainer>
                    <HeroAnimation theme={theme} />
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.title}</Title>
                        <TextLoop>
                            I enjoy
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButtonComponent>Download CV</ResumeButtonComponent>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
