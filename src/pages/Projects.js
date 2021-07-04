import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch} from 'react-icons/md';
import projectInfo from '../assets/data/projects';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ContactBanner from '../components/ContactBanner';

const ProjectsStyles = styled.div`
    padding: 10rem 0 0;
    .projects__allItems {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
    .projects__searchBar {
        position: relative;
        width: 300px;
        margin-top: 5rem;
        input {
            width: 100%;
            font-size: 2rem;
            padding: .8rem;
            color: var(--black);
            border-radius: 6px;
            border: none;
            outline: none;
        }
        .searchIcon {
            position: absolute;
            width: 2rem;
            right: 2rem;
            path {
                color: var(--deep-dark);
            }
        }
    }
    @media only screen and (max-width: 768px){
        .projects__searchBar,
        .projects__searchBar form,
        .projects__searchBar input {
            width: 100%;
        }
    }
    
`;

const Projects = () => {

    const [project, setProject] = useState(projectInfo)
    const [searchText, setSearchText] = useState('')

    //입력된 값이 변경될때마다 입력된 값과 프로젝트 데이터의 이름과 일치하는 것만 보여주기
    useEffect(() => {
       if(searchText === '') return;
       setProject(() => 
            projectInfo.filter(item => (
                item.name.toLowerCase().match(searchText.toLowerCase()))
       ))
    }, [searchText])

    const handleChange = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
        if(!e.target.value.length){
            setProject(projectInfo)
        }
    }

    return (
        <ProjectsStyles>
            <div className="container">
                <SectionTitle heading="Projects" subheading="some of my recent projects"/>
                <div className="projects__searchBar">
                    <form>
                        <input 
                            type="text" 
                            value={searchText} 
                            onChange={handleChange}
                            placeholder="Project Name"
                        />
                        <MdSearch className="searchIcon"/>
                    </form>
                </div>
                <div className="projects__allItems">
                    {
                        project.map(item => (
                            <ProjectItem 
                                key={item.id} 
                                title={item.name}
                                desc={item.desc}
                                img={item.img} 
                            />
                        ))
                    }
                </div>
            </div>
            <ContactBanner/>
        </ProjectsStyles>
    );
};

export default Projects;