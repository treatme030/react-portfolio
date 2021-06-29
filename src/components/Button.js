import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-size: 2.2rem;
        background-color: ${(props) => props.outline ? 'transparent' : 'var(--gray-1)'};
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(props) => props.outline ? 'var(--gray-1)' : 'black'};
    }
    @media only screen and (max-width: 768px){
        .button {
            font-size: 1.8rem;
        }
    }
`;
//부모 컴포넌트에 작성하고 props로 넘겨도 되고, 부모 컴포넌트에 작성하지 않고 
//바로 props로 넘겨주는 곳에 작성해도 됨
const Button = ({
    btnLink = 'test', 
    btnText = 'Test', 
    outline = false,
}) => {
    return (
        <ButtonStyle outline={outline}>
            <Link className="button" to={btnLink}>{btnText}</Link>
        </ButtonStyle>
    );
};

export default Button;