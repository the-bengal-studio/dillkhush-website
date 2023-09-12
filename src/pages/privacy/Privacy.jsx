import React from "react";
import Nav_1 from "../components/Nav_1";
import Priv from "./Priv";
import Footer from "../../components/Common/Footer";
import Contact from "../../components/Common/Contact";

function Privacy ()
{
  return (
    <div>
      <Nav_1 />
      <Priv />
      <Contact />
      <Footer />
    </div>
  );
}

export default Privacy;