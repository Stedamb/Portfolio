import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";

import './i18n';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div className='bg-black'>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
