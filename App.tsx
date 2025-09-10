
import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import StickFigureJump from './components/animations/StickFigureJump';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CookingSection from './components/CookingSection';
import OutdoorSection from './components/OutdoorSection';
import ChefFlipAnimation from './components/animations/ChefFlipAnimation';
import WalkingThroughGrassAnimation from './components/animations/WalkingThroughGrassAnimation';

const App: React.FC = () => {
    return (
        <main className="font-sans antialiased">
            <Header />
            <IntroSection />
            <StickFigureJump />
            <WorkExperienceSection />
            <ProjectsSection />
            <ChefFlipAnimation />
            <CookingSection />
            <WalkingThroughGrassAnimation />
            <OutdoorSection />
            <footer className="text-center p-8 bg-gray-800 text-gray-400">
                <p>Last updated September 9, 2025.</p>
            </footer>
        </main>
    );
};

export default App;
