import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <ProjectsSection/>
            <TestimonialSection/>
            <ContactBanner/>
            <Footer/>
        </div>
    );
};

export default Home;