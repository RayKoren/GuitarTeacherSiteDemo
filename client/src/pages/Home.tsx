import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Performances from '@/components/Performances';
import UpcomingGigs from '@/components/UpcomingGigs';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="font-body text-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Performances />
      <UpcomingGigs />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
