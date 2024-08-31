import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 330px;
    height: 490px;
    background: linear-gradient(343.07deg, hsla(231, 17%, 36%, 0.06) 5.71%, hsla(231, 17%, 36%, 0) 64.83%);
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    user-select: none;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        filter: brightness(1.2);
    }
`;

const Image = styled.img`
    width: 75%;
    height: 50%;
    align-self: center;
    border: 1px solid ${({ theme }) => theme.primary + 80};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    loading: lazy;
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const EllipsisText = styled.div`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${({ lines }) => lines || 1};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Title = styled(EllipsisText)`
    font-size: 20px;
    font-weight: 600;
    align-self: center;
    color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled(EllipsisText)`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-top: 8px;
    -webkit-line-clamp: 3;
`;

const ProjectCards = React.memo(({ project, handleProjectClick }) => {
    const handleClick = () => handleProjectClick(project);

    return (
        <Card onClick={handleClick}>
            <Image src={project.image} />
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
        </Card>
    );
});

export default ProjectCards;
