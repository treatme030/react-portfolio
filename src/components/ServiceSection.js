import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md'

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems {
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
        gap: 3rem;

    }
    @media only screen and (max-width: 768px){
        .services__allItems {
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

const ServiceSection = () => {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle heading="Services" subheading="What I will do for you"/>
                <div className="services__allItems">
                    <ServiceSectionItem icon={<MdDesktopMac/>} title="Web Design" desc="I do UI/UX design for the website that hepls website to get a unique look."/>
                    <ServiceSectionItem icon={<MdCode/>} title="Web Dev" desc="I also develop the websites. I create high performance website with balzing fast speed."/>
                    <ServiceSectionItem icon={<MdPhonelinkSetup/>} title="App Dev" desc="I develop moble application I create mobile app with eye catching UI."/>
                </div>
            </div>
        </ServicesItemStyles>
    );
};

export default ServiceSection;