import NavBar from "./Components/Navigation/NavBar";
import Menu from "./Components/Menu/Menu";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./Components/Navigation/ScrollHandler";
import ScrollTop from "./Components/Navigation/ScrollTop";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Contact from "./Components/Contact/Contact";
import Particles from "./Components/Particles/Particles";
import "./index.css"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
  },
});

const appStyles = makeStyles((theme) =>({

  root: {
    width: "100%",
    margin: "auto",
    height: "4400px",
    [theme.breakpoints.down('lg')]: {
      height: "3700px",
  }
  }
}))

const App = () => {
  const styles = appStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.root}>
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
