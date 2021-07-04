import React from 'react';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';

const ContactStyles = styled.div`
`;

const Contact = () => {
    return (
        <ContactStyles>
            <ContactSection/>
            <Map/>
        </ContactStyles>
    );
};

export default Contact;