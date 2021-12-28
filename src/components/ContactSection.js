import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

const ContactSectionStyles = styled.div`
    padding: 10rem 0 ;
    .contactSection__wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
        &:after {
            position: absolute;
            content: '';
            width: 2px;
            height: 50%;
            background-color: var(--gray-1);
            left: 50%;
            top: 30%;
            transform: translate(-50%, -50%);
        }
        .left {
            width: 100%;
            max-width: 500px;
        }
        .right {
            max-width: 500px;
            width: 100%;
        }
    }
    @media only screen and (max-width: 768px){
        .contactSection__wrapper {
            flex-direction: column; 
            &:after {
                display: none;
            }
            .left,
            .right {
                max-width: 100%;
            }
            .right {
                padding: 4rem 2rem 2rem;
            }
        }
    }
`;

const ContactSection = () => {
    return (
        <ContactSectionStyles>
            <div className="container">
                <SectionTitle heading="contact" subheading="get in touch"/>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem icon={<MdLocalPhone/>} text="010-4515-9867"/>
                        <ContactInfoItem icon={<MdEmail/>} text="treatme8192@gmail.com"/>
                        <ContactInfoItem text="경기도 시흥시 미산로144번길"/>
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </ContactSectionStyles>
    );
};

export default ContactSection;