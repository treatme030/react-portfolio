import React from 'react';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right {
        flex: 1;
    }
    .section-title {
        text-align: left;
    }
    .para {
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 950px){
        .aboutSection__left {
            flex: 4;
        }
        .aboutSection__right {
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
        .container {
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right {
            width: 100%;
        }
        .aboutSection__right {
            margin-top: 3rem;
        }
        .section-title {
            text-align: center;
        }
        .para {
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons {
            flex-direction: column;
            gap: 0;
            .button-wrapper,
            a {
                width: 100%;
                text-align: center;
            }
        }
    }
`;

const AboutSection = () => {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle subheading="Let me introduce myself" heading="About me"/>
                    <PText>
                        기존의 틀에 갇히지 않고,
                        더 효율적인 방법이 있는지 지속적으로 탐색하며,
                        새로운 것은 열정적으로 받아들이는,
                        항상 학습하는 개발자
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button btnLink="/projects" btnText="Works"/>
                        <Button btnLink="/about" btnText="Read More" outline/>
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="웹개발 학습하는 이미지"/>
                </div>
            </div>
        </AboutSectionStyle>
    );
};

export default AboutSection;