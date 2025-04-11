
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import BehindTheTech from '../components/BehindTheTech';
import Team from '../components/Team';
import TryItYourself from '../components/TryItYourself';
import Interview from '../components/Interview';
import FutureWork from '../components/FutureWork';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <HowItWorks />
        <BehindTheTech />
        <Team />
        <TryItYourself />
        <Interview />
        <FutureWork />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
