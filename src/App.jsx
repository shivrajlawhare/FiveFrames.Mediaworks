import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Sections/Services/Services";
import About from "./components/Sections/About/About";
import WhosClicking from "./components/Sections/WhosClicking/WhosClicking";
import OurServices from "./components/Sections/OurServices/OurServices";
import SlideIntoInbox from "./components/Sections/SlideIntoOurInbox/SlideIntoOurInbox";
import SWHTDesltop from "./components/Sections/SWHT-Desktop/SWHT-Desltop";
import SWHTMobile from "./components/Sections/SWHT-Mobile/SWHT-Mobile";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <div>
          <Navbar />

          <section id="about">
            <About />
          </section>

          <WhosClicking />

          <section id="services">
            <Services />
            <OurServices />
          </section>

          <section id="swht">
            <SWHTDesltop />
            <SWHTMobile />
          </section>

          <section id="contact">
            <SlideIntoInbox />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
