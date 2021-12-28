import React from 'react';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img2.jpg';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
    padding: 20rem 0 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
        }
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        padding: 10rem 0 0;
        .top-section {
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
    }
`;

const About = () => {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">안녕하세요! <span>김주희</span> 입니다.</p>
                        <h2 className="about__heading">A Frontend Web developer</h2>
                        <div className="about__info">
                                <PText>
                                    - HTML의 시맨틱 마크업과 CSS의 적절한 속성을 사용하여 스토리를 읽을 수 있는 레이아웃을 구현하고자 노력합니다.
                                    <br/><br/>
                                    - 컴포넌트의 합리적인 분리와 효율적인 재사용으로 클린코드를 작성하려고 노력합니다.
                                    <br/><br/>
                                    - 퍼블리싱과 백엔드 작업에 대한 지식과 이해가 가능하여 관련 분야와 원활한 커뮤니케이션에 유리합니다.
                                    <br/><br/>
                                    - 경험이 없는 부분에 대해서는 적극적으로 공부하고, 탐색하며, 적극적으로 적용해보려고 합니다.
                                </PText>
                        </div>
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="Ayan Khan img"/>
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                       <h1 className="about__info__heading">EDUCATION</h1>
                       <AboutInfoItem
                       title="코드스테이츠(부트캠프) 2021년 5월~12월"
                       items={['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'express', 'Mysql']}
                       />
                       <AboutInfoItem
                       title="이젠아카데미(국비학원) 2021년 4월~6월"
                       items={['React', 'Redux 기초']}
                       />
                       <AboutInfoItem
                       title="봄아카데미(국비학원) 2021년 1월~4월"
                       items={['HTML', 'CSS', 'JavaScript 기초']}
                       />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">My Skills</h1>
                        <AboutInfoItem
                        title="FrontEnd"
                        items={['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Redux-toolkit', 'styled-components']}
                        />
                        <AboutInfoItem
                        title="BackEnd"
                        items={['express', 'Mysql', 'Koa']}
                        />
                        <AboutInfoItem
                        title="Design"
                        items={['Photoshop', 'Figma']}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner/>
        </AboutPageStyles>
    );
};

export default About;