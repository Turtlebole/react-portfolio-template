import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Wrapper, Title, CarouselWrapper, ViewToggleButtonGroup, 
    ToggleButtonGroup, ToggleButtonGroupMobile, ToggleButton, Divider, CardContainer, 
    ListItem, PostHeader, PostTitle, PostDate, 
    PostDescription, Tags, Tag, LeftArrowSVG, RightArrowSVG, 
    LeftArrowPath, RightArrowPath
} from './ProjectsStyle'; 
import ProjectCarousel from '../Cards/ProjectCarousel';
import { projects } from '../../data/constants';
import { FaList, FaSlidersH } from 'react-icons/fa'; 

const Projects = ({ setOpenModal }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);
    const [viewType, setViewType] = useState('grid'); 
    const navigate = useNavigate();

    const handleResize = () => {
        const width = window.innerWidth;
        const isMobile = width <= 768;

        setIsMobileView(isMobile);

        if (isMobile) {
            setViewType('grid');
        } else {
            setViewType('list'); 
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        if (projects.length > startIndex + (isMobileView ? 1 : 3)) {
            setStartIndex(startIndex + (isMobileView ? 1 : 3));
        } else {
            setStartIndex(0);
        }
    };

    const handlePrev = () => {
        setStartIndex(Math.max(startIndex - (isMobileView ? 1 : 3), 0));
    };

    const handleProjectClick = (project) => {
        navigate(`/project/${project.id}`, { state: { project } });
    };

    const handleViewTypeChange = (type) => {
        setViewType(type);
    };

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                {!isMobileView && (
                    <ViewToggleButtonGroup>
                        <ToggleButton
                            onClick={() => handleViewTypeChange('list')}
                            isActive={viewType === 'list'}
                        >
                            <FaList />
                        </ToggleButton>
                        <ToggleButton
                            onClick={() => handleViewTypeChange('grid')}
                            isActive={viewType === 'grid'}
                        >
                            <FaSlidersH />
                        </ToggleButton>
                    </ViewToggleButtonGroup>
                )}

                {viewType === 'grid' ? (
                    <CarouselWrapper>
                        <ProjectCarousel
                            numberOfProjects={projects}
                            projects={projects.slice(startIndex, startIndex + (isMobileView ? 1 : 3))}
                            handleProjectClick={handleProjectClick}
                        />
                        <ToggleButtonGroup>
                            <ToggleButton onClick={handlePrev} disabled={startIndex === 0}>
                                <LeftArrowSVG>
                                    <LeftArrowPath />
                                </LeftArrowSVG>
                            </ToggleButton>
                            <ToggleButton onClick={handleNext} disabled={startIndex + (isMobileView ? 1 : 3) >= projects.length}>
                                <RightArrowSVG>
                                    <RightArrowPath />
                                </RightArrowSVG>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroupMobile>
                            <ToggleButton onClick={handlePrev} disabled={startIndex === 0}>
                                <LeftArrowSVG>
                                    <LeftArrowPath />
                                </LeftArrowSVG>
                            </ToggleButton>
                            <ToggleButton onClick={handleNext} disabled={startIndex + (isMobileView ? 1 : 3) >= projects.length}>
                                <RightArrowSVG>
                                    <RightArrowPath />
                                </RightArrowSVG>
                            </ToggleButton>
                        </ToggleButtonGroupMobile>
                    </CarouselWrapper>
                ) : (
                    <CardContainer>
                        {projects.map((project, index) => (
                            <ListItem key={index} onClick={() => handleProjectClick(project)}>
                                <img src={project.image} alt={project.title} />
                                <div>
                                    <PostHeader>
                                        <PostTitle>{project.title}</PostTitle>
                                        <PostDate>{project.date}</PostDate>
                                    </PostHeader>
                                    <PostDescription>{project.description}</PostDescription>
                                    <Tags>
                                        {project.tags?.map((tag, index) => (
                                            <Tag key={index}>{tag}</Tag>
                                        ))}
                                    </Tags>
                                </div>
                            </ListItem>
                        ))}
                    </CardContainer>
                )}
                <Divider />
            </Wrapper>
        </Container>
    );
};

export default Projects;
