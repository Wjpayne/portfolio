import NavBar from "./Components/Navigation/NavBar";
import LandingPage from "./Components/Navigation/NavButtons";
import Algo from "./Components/AlgoMenu/Algo";
import ParticlesBg from "particles-bg";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe";
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./Components/Navigation/ScrollHandler";
import ScrollTop from "./Components/Navigation/ScrollTop";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <ScrollHandler />
        <NavBar />
        <Algo />
        <div style={{ height: "1300px", width: "100%" }} bg="true">
          <LandingPage />
          <ParticlesBg color="#3fd2c7" type="cobweb" />
        </div>
        <AboutMe />
        <Projects />
        <ScrollTop />
      </BrowserRouter>
    </div>
  );
};

export default App;
