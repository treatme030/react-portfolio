import React from 'react';
import PText from './PText';
import FooterCol from './FooterCol';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding: 10rem 0;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer__col1__title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
        background-color: var(--deep-dark);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para {
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px){
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 {
            max-width: 100%;
        }
        .copyright {
            .container {
                div {
                    margin-top: 0;
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Juhee Kim</h1>
                    <PText>
                    &lt;코드로 소통하는 개발자&#47;&gt;
                    </PText>
                </div>
                <div className="footer__col2">
                    {/* <Link/> 적용 */}
                    <FooterCol heading="Important Links"
                    links={[
                        {
                            title: 'Home',
                            path: '/',
                            type: 'Link'
                        },
                        {
                            title: 'About',
                            path: '/about',
                            type: 'Link'
                        },
                        {
                            title: 'Projects',
                            path: '/projects',
                            type: 'Link'
                        },
                        {
                            title: 'Contact',
                            path: '/contact',
                            type: 'Link'
                        },
                    ]}
                    />
                </div>
                <div className="footer__col3">
                    {/* <a></a> 적용 */}
                    <FooterCol heading="Contact Info"
                    links = {[
                        {
                            title: '010-4515-9867',
                            path: 'tel:010-4515-9867'
                        },
                        {
                            title: 'treatme8192@gmail.com',
                            path: 'mailto:treatme8192@gmail.com'
                        },
                        {
                            title: '경기도 시흥시',
                            path: 'http://google.com/maps'
                        }
                    ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol heading="Social Links"
                    links = {[
                        {
                            title: 'GitHub',
                            path: 'https://github.com/treatme030'
                        },
                        {
                            title: 'Facebook',
                            path: 'http://facebook.com'
                        },
                        {
                            title: 'Twitter',
                            path: 'http://twitter.com'
                        }
                    ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>&#169; 2021 - Designed By Juhee Kim | web cifar</PText>
                </div>
            </div>
        </FooterStyles>
    );
};

export default Footer;