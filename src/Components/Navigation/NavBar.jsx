import React, { useRef, useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider, Drawer, List, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 240;

const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    fontSize: "50",
  },

  menuButton: {
    display: "flex",
    float: "right",
    color: "#3fd2c7",

    fontSize: "50px",
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
  },

  appBarBlack: {
    backgroundColor: "#e1f2f7",
    transition: ".5s",
  },

  navButton: {
    color: "white",

    visibility: "hidden",
  },

  navButtonAppear: {
    color: "#3fd2c7",

    visibility: "show",
  },
}));

export default function NavBar({ navTheme }) {
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
      <Paper>
        <AppBar
          elevation={0}
          className={classes[navRef.current]}
          position="fixed"
        >
          <Toolbar>
            <Button className={classes[navButtonRef.current]}>About</Button>
            <Button className={classes[navButtonRef.current]}>Projects</Button>
            <Button className={classes[navButtonRef.current]}>Contact</Button>

            <div
              style={{
                marginLeft: "auto",
              }}
            >
              <IconButton onClick={handleDrawer} aria-label="menu">
                <MenuIcon className={classes.menuButton} anchor="right" />
              </IconButton>
            </div>
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
            <ListItem button>
              <ListItemText className={classes.title}>Portfolio</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText color="inherit">About</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText color="inherit">Projects</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText color="inherit">Contact</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Paper>
    </div>
  );
}
