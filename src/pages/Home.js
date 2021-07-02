import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <ProjectsSection/>
            <TestimonialSection/>
        </div>
    );
};

export default Home;