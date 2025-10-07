import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Sections/Services/Services";
import About from "./components/Sections/About/About";
import WhosClicking from "./components/Sections/WhosClicking/WhosClicking";
import OurServices from "./components/Sections/OurServices/OurServices";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <div>
          < Navbar />
          < About />
          < WhosClicking />
          < OurServices />
        </div>
      )}
    </>
  );
}

export default App;
