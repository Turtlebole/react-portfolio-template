import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { gsap } from 'gsap';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  margin-top: 52px;
  color: ${({ theme }) => theme.primary};
  position: relative;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 24px;
  }
`;

export const Desc = styled.div`
  font-size: 48px;
  text-align: center;
  max-width: 600px;
  margin-top: 40px;
  color: ${({ theme }) => theme.colored_detail};
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background: transparent;
  color: ${({ active, theme }) => (active ? theme.primary : theme.text_primary)};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin-top: 30px;
  @media (max-width: 768px) {
    justify-content: space-around;
    gap: 12px;
    margin-top: 24px;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.colored_detail};
  box-shadow: rgba(76, 81, 109, 0.15) 0px 4px 18px;
  border-radius: 16px;
  padding: 12px;
  position: relative;
  transition: all 0.3s ease;
  width: 150px;
  box-sizing: border-box;
  opacity: 0;
  transform: scale(0.9);
  &:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 80px;
    height: 80px;
    padding: 8px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    padding: 6px;
  }
`;

const SkillImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const SkillName = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colored_detail + 80};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Skills = () => {
  const [activeButton, setActiveButton] = useState('frontend');
  const skillsRef = useRef([]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const filteredSkills = skills.filter(skill => skill.title.toLowerCase() === activeButton.toLowerCase());

  useEffect(() => {
    if (skillsRef.current.length > 0) {
      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
      tl.fromTo(skillsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.3 }
      );
    }
  }, [activeButton]);

  return (
    <Container id="skills">
      <Wrapper>
        <Desc>TECH STACK</Desc>
        <ButtonContainer>
          <Button active={activeButton === 'frontend'} onClick={() => handleButtonClick('frontend')}>
            Frontend
          </Button>
          <Button active={activeButton === 'backend'} onClick={() => handleButtonClick('backend')}>
            Backend
          </Button>
          <Button active={activeButton === 'database'} onClick={() => handleButtonClick('database')}>
            Database
          </Button>
        </ButtonContainer>
        <SkillsContainer>
          {filteredSkills.flatMap((skill, skillIndex) =>
            skill.skills.map((item, index) => (
              <Skill
                key={item.name}
                ref={el => (skillsRef.current[skillIndex * skill.skills.length + index] = el)}
              >
                <SkillImage src={item.image} />
                <SkillName>{item.name}</SkillName>
              </Skill>
            ))
          )}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
