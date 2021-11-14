import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Showcase from '../Components/HomePage/Showcase'
import HowItWorks from '../Components/HomePage/HowItWorks';
import Features from '../Components/HomePage/Features';
import Faq from '../Components/HomePage/Faq';
import Contact from '../Components/HomePage/Contact';
import Waitlist from '../Components/HomePage/Waitlist';

const HomePage = () => {
    return ( 
        <>
    <Navbar/>
    <Showcase />
    <HowItWorks />
    <Features/>
    <Faq />
    <Waitlist />
    <Contact />
      <Footer/>
        

        </>
     );
}
 
export default HomePage;