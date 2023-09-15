import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
