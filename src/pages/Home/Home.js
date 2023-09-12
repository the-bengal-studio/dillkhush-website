import Contact from "../../components/Common/Contact";
import Footer from "../../components/Common/Footer";
import Body from "./Body";
import Nav from "./Nav";
import Service from "./Service";
import Why from "./Why";
import About from "./about";

function Home ()
{
  return (
    <div>
      <Nav />
      <Body />
      <About />
      <Why />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;