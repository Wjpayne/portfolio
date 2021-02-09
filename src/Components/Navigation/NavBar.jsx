import React, { useRef, useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider, Drawer, Hidden, List, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import ResumeLink from '@material-ui/core/Link';

const drawerWidth = 240;

const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      width: "200%",
    },
  },

  title: {
    flexGrow: 1,
    fontSize: "50",
    color: "#2565ae",
  },

  menuButton: {
    color: "#2565ae",
    fontSize: "40px",
    position: "relative",
    float: "right"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  drawerTitle: {
    textAlign: "center",
    fontSize: "20px",
  },

  appBar: {
    backgroundColor: "white",
    transition: ".5s",
    margin: "auto",
    padding: "0",
    position: "fixed",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "transparent"

      
    },
  },

  appBarBlack: {
    backgroundColor: "transparent",
    transition: ".5s",
    margin: "0",
    overflow: "hidden",
    position: "fixed",
    [theme.breakpoints.down("sm")]: {

    },
  },

  navButton: {
    color: "white",
    visibility: "hidden",
    width: "100%",
    margin: "auto",
  },

  navButtonAppear: {
    color: "#2565ae",
    visibility: "show",
    fontFamily: "Montserrat Subrayada",
    fontSize: "20px",
    transition: ".7s",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
}));

export default function NavBar() {
  //styling
  const classes = navStyles();

  const theme = useTheme();

  //set state for nav bar and drawer

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  //set state for navBar scroll

  const [navBackground, setNavbackground] = useState("appBarBlack");

  const [navButton, setNavButton] = useState("navButton");

  const navButtonRef = useRef();
  const navRef = useRef();

  navRef.current = navBackground;
  navButtonRef.current = navButton;

  //handle scroll for appearing on scroll

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setNavbackground("appBar");
      } else {
        setNavbackground("appBarBlack");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setNavButton("navButtonAppear");
      } else {
        setNavButton("navButton");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle setTheme

  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <AppBar elevation={0} className={classes[navRef.current]}>
          <Toolbar>
            <Button
              component={Link}
              to={"/#AboutMe"}
              className={classes[navButtonRef.current]}
            >
              About
            </Button>
            <Button
              component={Link}
              to={"/#Projects"}
              className={classes[navButtonRef.current]}
            >
              Projects
            </Button>
            <ResumeLink target = "blank" href = "https://william-payne-resume.herokuapp.com/">
            <Button className={classes[navButtonRef.current]}>Resume</Button>
            </ResumeLink >
            <Button
              component={Link}
              to={"/#Contact"}
              className={classes[navButtonRef.current]}
            >
              Contact
            </Button>

            {/* Drawer Component */}

            <Hidden smUp>
              <IconButton onClick={handleDrawer} aria-label="menu">
                <MenuIcon className={classes.menuButton} />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <List>
            <ListItem component={Link} to={"/#AboutMe"} button>
              <ListItemText className={classes.title}>About</ListItemText>
            </ListItem>
            <Divider />
            <ListItem component={Link} to={"/#Projects"} button>
              <ListItemText className={classes.title}>Projects</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
            <ResumeLink target = "blank" href = "https://william-payne-resume.herokuapp.com/">
              <ListItemText className={classes.title}>Resume</ListItemText>
              </ResumeLink>
            </ListItem>
            <Divider />
            <ListItem component={Link} to={"/#Contact"} button>
              <ListItemText className={classes.title}>Contact</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Paper>
    </div>
  );
}
