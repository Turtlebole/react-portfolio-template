import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaList, FaTh } from 'react-icons/fa';
import throttle from 'lodash/throttle';

const Container = styled.div`
    padding: 20px;
    margin-top: 10vh;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;

    @media (max-width: 640px) {
        display: none;
    }
`;

const ViewButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    background: ${({ isActive, theme }) => (isActive ? theme.primary + '60' : theme.primary + '20')};
    color: ${({ theme }) => theme.darkMode ? '#FFFFFF' : '#000000'};
    pointer-events: all;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background: ${({ theme }) => theme.primary + '60'};
        transform: scale(1.1);
    }

    svg {
        font-size: 1.2rem;
    }

    margin-left: 10px;
`;

const ListContainer = styled.div`
    width: 100%;
    max-width: 1200px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`;

const ListItem = styled.div`
    background: ${({ theme }) => theme.card};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    transition: background-color 0.3s, transform 0.3s;
    text-align: left;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.card_light};
        transform: scale(0.99);
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`;

const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.primary};
`;

const PostDate = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text_secondary};
`;

const PostDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
`;

const Tag = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text_secondary};
    background-color: ${({ theme }) => theme.colored_detail + 20};
    padding: 4px 8px;
    border-radius: 5px;
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 8px 12px;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    border-radius: 20px;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.bgLight};
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
    }

    @media (max-width: 600px) {
        max-width: 80%;
    }
`;

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [viewType, setViewType] = useState('list');

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const response = await fetch('/posts.json');
                if (!response.ok) {
                    throw new Error(`Failed to fetch post list: ${response.statusText}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(`Failed to fetch post list: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchPostList();
    }, []);

    const filteredPosts = useMemo(() => {
        if (search) {
            const regex = new RegExp(search, 'i');
            return posts.filter(post =>
                regex.test(post.filename) || regex.test(post.date) || regex.test(post.desc)
            );
        }
        return posts;
    }, [search, posts]);

    useEffect(() => {
        const handleResize = throttle(() => {
            if (window.innerWidth <= 640) {
                setViewType('list');
            }
        }, 200);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleViewType = useCallback((type) => setViewType(type), []);

    const renderPosts = useCallback(() => {
        return viewType === 'grid' ? (
            <GridContainer>
                {filteredPosts.map((post, index) => (
                    <StyledLink key={index} to={`/blog/${post.filename}`}>
                        <ListItem viewType={viewType} backgroundImage={post.backgroundImage}>
                            <PostHeader>
                                <PostTitle>{post.filename.replace('.md', '')}</PostTitle>
                                <PostDate>{post.date}</PostDate>
                            </PostHeader>
                            <PostDescription>{post.desc}</PostDescription>
                            <Tags>
                                {post.tags && post.tags.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </Tags>
                        </ListItem>
                    </StyledLink>
                ))}
            </GridContainer>
        ) : (
            <ListContainer>
                {filteredPosts.map((post, index) => (
                    <StyledLink key={index} to={`/blog/${post.filename}`}>
                        <ListItem viewType={viewType} backgroundImage={post.backgroundImage}>
                            <PostHeader>
                                <PostTitle>{post.filename.replace('.md', '')}</PostTitle>
                                <PostDate>{post.date}</PostDate>
                            </PostHeader>
                            <PostDescription>{post.desc}</PostDescription>
                            <Tags>
                                {post.tags && post.tags.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </Tags>
                        </ListItem>
                    </StyledLink>
                ))}
            </ListContainer>
        );
    }, [viewType, filteredPosts]);

    return (
        <Container>
            <Heading>Explore Our Posts</Heading>
            <SearchInput
                type="text"
                placeholder="Search by name or date..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ButtonContainer>
                <ViewButton onClick={() => toggleViewType('list')} isActive={viewType === 'list'}>
                    <FaList />
                </ViewButton>
                <ViewButton onClick={() => toggleViewType('grid')} isActive={viewType === 'grid'}>
                    <FaTh />
                </ViewButton>
            </ButtonContainer>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                filteredPosts.length > 0 ? (
                    renderPosts()
                ) : (
                    <p>No posts found</p>
                )
            )}
        </Container>
    );
};

export default PostList;
