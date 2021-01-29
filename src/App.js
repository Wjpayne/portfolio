import NavBar from "./Components/Navigation/NavBar";
import Menu from "./Components/Menu/Menu";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./Components/Navigation/ScrollHandler";
import ScrollTop from "./Components/Navigation/ScrollTop";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Contact from "./Components/Contact/Contact";
import Particles from "./Components/Particles/Particles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
  },


});

const styles = {
  root: {
    height: "4500px",

  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style = {styles.root}>
         <Particles />
        <BrowserRouter>
          <ScrollHandler />
          <NavBar />
          <Menu />
          <AboutMe />
          <Projects />
          <Contact />
          <ScrollTop />
        </BrowserRouter>
       
      </div>
    </ThemeProvider>
  );
};

export default App;
