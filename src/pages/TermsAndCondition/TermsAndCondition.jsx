import React from 'react';
import NavBar from '../../components/Common/NavBar';
import Terms from './Terms';
import Footer from "../../components/Common/Footer";
import Contact from "../../components/Common/Contact";
const TermsAndCondition = () =>
{
    return (
        <div>
            <NavBar />
            <Terms />
            <Contact />
            <Footer />
        </div>
    );
};

export default TermsAndCondition;
