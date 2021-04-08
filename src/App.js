import NavBar from "./Components/Navigation/NavBar";
import Menu from "./Components/Menu/Menu";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./Components/Navigation/ScrollHandler";
import ScrollTop from "./Components/Navigation/ScrollTop";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import Contact from "./Components/Contact/Contact";
import Particles from "./Components/Particles/Particles";
import "./index.css";
import { useState } from "react";

const appStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: "20px",
    margin: "0",
    scrollBehavior: "smooth",
    backgroundImage: "linear-gradient( #e1f2f7, transparent)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },

  rootDark: {
    height: "100%",
    padding: "20px",
    margin: "0",
    scrollBehavior: "smooth",
    backgroundImage: "linear-gradient( black, transparent)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },


}));

const App = () => {
  //set a spinner until the reactDOM renders
  const styles = appStyles();

  const [darkState, setDarkState] = useState(false);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Montserrat"],
    },
    palette: {
      secondary: {
        main: "#989898",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={darkState ? styles.rootDark : styles.root}>
          <Particles />
          <div className={styles.container}></div>
          <ScrollHandler />
          <NavBar darkState={darkState} handleThemeChange={handleThemeChange} />
          <Menu />
          <AboutMe darkState={darkState} />
          <Projects />
          <Contact darkState={darkState} />
          <ScrollTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
