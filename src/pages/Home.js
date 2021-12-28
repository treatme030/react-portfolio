import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactBanner/>
        </div>
    );
};

export default Home;