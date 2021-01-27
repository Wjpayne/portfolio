import NavBar from "./Components/Navigation/NavBar";

import Menu from "./Components/Menu/Menu";
// import ParticlesBg from "particles-bg";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe";
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./Components/Navigation/ScrollHandler";
import ScrollTop from "./Components/Navigation/ScrollTop";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <ScrollHandler />
          <NavBar />
          <Menu />
          <div style={{ height: "1300px", width: "100%" }}>
            {/* <ParticlesBg color="#3fd2c7" type="cobweb" num ="50" bg="true"/> */}
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
