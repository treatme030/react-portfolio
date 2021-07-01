import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon {
        svg {
            width: 3rem;
        }
    }
    .servicesItem__title {
        font-size: 2.4rem;
        font-family: 'Montserrat SemiBold';
    }
    .para {
        margin-top: 2rem;
    }
`;

const ServiceSectionItem = ({
    icon = <MdDesktopMac/>,
    title ='Web Design',
    desc ='I do'
}) => {
    return (
        <ItemStyles>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    );
};

export default ServiceSectionItem;