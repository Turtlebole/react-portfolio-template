import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCards from './ProjectCards';

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    &.loaded {
        opacity: 1;
    }
`;

const ProjectCarousel = ({ projects, handleProjectClick }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.classList.add('loaded');
        }
    }, [projects]);

    return (
        <CarouselContainer ref={carouselRef}>
            {projects.slice(0, 3).map((project, index) => (
                <ProjectCards
                    key={index}
                    project={project}
                    handleProjectClick={handleProjectClick}
                />
            ))}
        </CarouselContainer>
    );
};

export default ProjectCarousel;
