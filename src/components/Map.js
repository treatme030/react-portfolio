import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/mymap.png';

const MapStyles = styled.div`
    position: relative;
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: var(--black);
            opacity: .5;
        }
    .container {
        position: relative;
        min-height: 400px;
        z-index: 2;
        .map__card {
            position: absolute;
            right: 10%;
            bottom: 10%;
            padding: 2rem;
            background: var(--deep-dark);
            width: 100%;
            max-width: 300px;
            border-radius: 12px;
            .map__card__heading {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .map__card__link {
                display: inline-block;
                font-size: 1.6rem;
                margin-top: 3rem;
                text-decoration: underline;
            }
        }
    }
    @media only screen and (max-width:768px){
        background-position: 80% center;
    }
    @media only screen and (max-width:400px){
        .map__card {
            max-width: none;
            right: auto;
        }
    }
`;

const Map = () => {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Here is me</h3>
                    <PText>경기도 시흥시 미산로144번길</PText>
                    <a 
                        href="http://kko.to/HkPCfWh40" 
                        target="_blank"
                        rel="noreferrer"
                        className="map__card__link"
                    >
                        Open in Kakao Map
                    </a>
                </div>
            </div>
        </MapStyles>
    );
};

export default Map;