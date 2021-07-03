import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
    .heading {
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
    li {
        margin-bottom: 1rem;
    }
    a {
        font-size: 1.8rem;
    }
`;

const FooterCol = ({
    heading,
    links = [
        {
            type: "Links",
            title: "Home",
            path: "/"
        }
    ]
}) => {
    return (
        <ColStyles>
            <h1 className="heading">{heading}</h1>
            <ul>
                {//type이 Link이면 <Link/>, 그렇지 않으면 <a></a>
                    links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Link' ? (
                        <Link to={item.path}>{item.title}</Link>
                        ) : (
                        <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>)}</li>)
                    )
                }
            </ul>
        </ColStyles>
    );
};

export default FooterCol;