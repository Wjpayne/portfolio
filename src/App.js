import NavBar from "./Components/Navigation/NavBar";

import Menu from "./Components/Menu/Menu";
// import ParticlesBg from "particles-bg";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./Components/Navigation/ScrollHandler";
import ScrollTop from "./Components/Navigation/ScrollTop";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Particles from "react-particles-js";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%", width: "100%" }}>
        <BrowserRouter>
          <ScrollHandler />
          <NavBar />
          <Menu />
          <div style={{ height: "1500px", width: "100%" }}>
            <Particles
              id="particles-js"
              params={{
                particles: {
                  number: {
                    value: 150,
                    density: {
                      enable: true,
                      value_area: 1000,
                    },
                  },
                  color: {
                    value: "#FFFF66",
                  },
                  opacity: {
                    value: 0.5,
                    anim: {
                      enable: true,
                    },
                  },
                  size: {
                    value: 7,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 3,
                    },
                  },
                  line_linked: {
                    enable: true,
                  },
                  move: {
                    speed: 0.2,
                  },
                },
              }}
            />
          </div>
          <AboutMe />
          <Projects />
          <ScrollTop />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
