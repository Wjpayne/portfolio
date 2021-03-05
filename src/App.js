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
// import { Resume } from "./Components/Resume/Resume"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
  },
});

const appStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "20px",
    margin: "0",
    scrollBehavior: "smooth",
  },
}));

const App = () => {
  //set a spinner until the reactDOM renders
  const styles = appStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={styles.root}>
          <Particles />
          <ScrollHandler />
          <NavBar />
          <Menu />
          <AboutMe />
          <Projects />
          <Contact />
          <ScrollTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
