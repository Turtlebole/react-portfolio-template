import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    PageContainer, InnerContainer, SubTitle, ImageContainer, Img, ProjectTitle,
    LeftContainer, RightContainer, Highlight, Tags, Tag, GitHubLink, GitHubIcon
} from './ProjectStyle';
import { ReactComponent as GitHubSvg } from '../../images/github.svg';

const ProjectPage = () => {
    const { state } = useLocation();
    const project = state?.project;

    if (!project) {
        return <div>No project data available.</div>;
    }

    return (
        <PageContainer>
            <InnerContainer>
                <LeftContainer>
                    <ProjectTitle>
                        About <Highlight>{project.title}</Highlight>
                    </ProjectTitle>
                    <SubTitle>{project.description}</SubTitle>
                    <Tags>
                        {project.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                        {project.github && (
                            <GitHubLink href={project.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon>
                                    <GitHubSvg />
                                </GitHubIcon>
                            </GitHubLink>
                        )}
                    </Tags>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer>
                        <ProjectTitle>
                            Project <Highlight>{project.title}</Highlight>
                        </ProjectTitle>
                        <Img src={project.image} alt={project.title} />
                    </ImageContainer>
                </RightContainer>
            </InnerContainer>
        </PageContainer>
    );
};

export default ProjectPage;
