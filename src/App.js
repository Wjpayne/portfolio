
import NavBar from "./Components/Navigation/NavBar";
import LandingPage from "./Components/LandingPage";
import Algo from "./Components/AlgoMenu/Algo";
import ParticlesBg from "particles-bg";
import Projects from './Components/Projects/Projects';


const App = () => {

  return (

        <div style = {{height: "2000px"}}>
        <NavBar />
        <LandingPage />
        <Algo />
        <div style = {{height: "100%", width: "100%"}}>
        <ParticlesBg color = "#3fd2c7"  type = "cobweb"  />
        <Projects />
        </div>
        </div>

  );
};

export default App;
