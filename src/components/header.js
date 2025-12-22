import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from 'gatsby'
import { makeStyles } from 'tss-react/mui';
import Person from '@mui/icons-material/Person';
import Button from "@mui/material/Button";
import Brush from '@mui/icons-material/Brush';

const useStyles = makeStyles()((theme) => ({
  homeLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0) "
  },
  banner: {
    transition: 'all 0.2s linear',
  },
  button: {
    margin: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  buttonText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const Header = ({ siteTitle, defaultShowMenu }) => {
  const { classes, cx } = useStyles();
  const [showMenu, setShowMenu] = useState(defaultShowMenu);

  useEffect(() => {
    const scrollAction = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 0) {
        setShowMenu(true)
      } else if (!defaultShowMenu) {
        setShowMenu(false)
      }
    };

    window.addEventListener("scroll", scrollAction, false);
    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, [defaultShowMenu]);

  return (
    <header>
      <AppBar className={cx(classes.banner, { [classes.transparent]: !showMenu })} position="fixed" color="primary">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit">
            <Link to={'/'} className={classes.homeLink}>{siteTitle}</Link>
          </Typography>
          <div>
            <Link to={'/projects/'} className={classes.homeLink}>
              <Button className={classes.button} color={"inherit"} variant={"text"}>
                <Brush className={classes.icon} />
                <span className={classes.buttonText}>Projects</span>
              </Button>
            </Link>
            <Link to={'/about/'} className={classes.homeLink}>
              <Button className={classes.button} color={"inherit"} variant={"text"}>
                <Person className={classes.icon} />
                <span className={classes.buttonText}>About</span>
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  defaultShowMenu: true
};

export default Header
