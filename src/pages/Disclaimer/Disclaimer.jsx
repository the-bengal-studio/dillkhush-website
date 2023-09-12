import React from 'react';
import NavBar from '../../components/Common/NavBar';
import Footer from "../../components/Common/Footer";
import Contact from "../../components/Common/Contact";
import Disc from './Disc';

const Disclaimer = () =>
{
    return (
        <div>
            <NavBar />
            <Disc />
            <Contact />
            <Footer />
        </div> );
};

export default Disclaimer;
