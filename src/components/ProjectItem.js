import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
    .projectItem__img {
        display: inline-block;
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        border: 3px solid var(--gray-2);
        img {
            height: 100%;
            object-fit: fill;
        }
    }
    .projectItem__info {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem__title {
        font-size: 2.2rem;
    }
    .projectItem__desc {
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px){
        .projectItem__img {
            height: 350px;
            width: 100%;
        }
    }
`;

const ProjectItem = ({
    img = projectImg, 
    title = 'Project Name', 
    desc = 'Lorem Ipsum is simply text of the printing',
    href = '#'
}) => {
    return (
        <ProjectItemStyles>
            <Link to="/projects" className="projectItem__img">
                <img src={img} alt="project img"/>
            </Link>
            <div className="projectItem__info">
                <a href={href} title="GitHub에서 확인하려면 click!" target="_blank" rel="noopener noreferrer">
                    <h3 className="projectItem__title">{title}</h3>
                    <p className="projectItem__desc">{desc}</p>
                </a>
            </div>
        </ProjectItemStyles>
    );
};

export default ProjectItem;