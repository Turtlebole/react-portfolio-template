import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/src/styles/prism';
import avatar from '../../images/avatar.png';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 10vh;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.div`
    max-width: 800px;
    width: 100%;
    background-color: ${({ theme }) => theme.card};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
    padding: 20px;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
    text-align: center;
`;

const Meta = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

const Divider = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.text_secondary};
    margin: 20px 0;
`;

const Content = styled.div`
    width: 100%;

    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        img {
            max-width: 40%;
            margin: 20px 20px 20px 0;
            display: inline-block;
            float: left;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 2rem;
        font-weight: 600;
    }

    p + h1, p + h2, p + h3, p + h4, p + h5, p + h6,
    ul + h1, ul + h2, ul + h3, ul + h4, ul + h5, ul + h6,
    ol + h1, ol + h2, ol + h3, ol + h4, ol + h5, ol + h6,
    blockquote + h1, blockquote + h2, blockquote + h3, blockquote + h4, blockquote + h5, blockquote + h6 {
        margin-top: 2rem;
    }
`;

const Loader = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 20px;
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.text_secondary};
        border-radius: 3px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.card};
    }
`;

const PostPage = ({ theme }) => {
    const { postName } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarkdownFile = async () => {
            try {
                const response = await fetch(`/content/${postName}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${postName}: ${response.statusText}`);
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                setError(`Failed to fetch markdown file: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdownFile();
    }, [postName]);

    const syntaxStyle = theme === 'light' ? oneLight : oneDark;

    return (
        <Container>
            <Header>
                <Title>About this post</Title>
            </Header>
            <Wrapper>
                <Meta>
                    <Avatar src={avatar} alt="Avatar" />
                    <span>YourName</span>
                </Meta>
                {loading ? (
                    <Loader>Loading...</Loader>
                ) : error ? (
                    <Loader>Error loading content: {error}</Loader>
                ) : (
                    <>
                        <Divider />
                        <Content>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code: ({ node, inline, className, children, ...props }) => {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <CustomSyntaxHighlighter
                                                language={match[1]}
                                                PreTag="div"
                                                style={syntaxStyle}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </CustomSyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        );
                                    }
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </Content>
                    </>
                )}
            </Wrapper>
        </Container>
    );
};

export default PostPage;
