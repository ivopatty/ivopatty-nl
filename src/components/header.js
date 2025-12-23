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
    color: theme.palette.text.primary,
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    letterSpacing: '0.05em',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    '&:hover': {
      color: theme.palette.primary.main,
      filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.5))',
    },
  },
  transparent: {
    background: 'transparent',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    boxShadow: 'none',
    borderBottom: '1px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  banner: {
    background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0.85) 0%, rgba(10, 25, 47, 0.7) 100%)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    borderBottom: '1px solid rgba(100, 255, 218, 0.15)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.text.primary,
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    letterSpacing: '0.03em',
    borderRadius: 12,
    padding: theme.spacing(1, 2),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 0,
      height: 0,
      borderRadius: '50%',
      background: 'rgba(100, 255, 218, 0.15)',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.4s ease, height 0.4s ease',
    },
    '&:hover': {
      color: theme.palette.primary.main,
      background: 'rgba(100, 255, 218, 0.08)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(100, 255, 218, 0.15)',
      '&::before': {
        width: '300px',
        height: '300px',
      },
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 0 0px rgba(100, 255, 218, 0))',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  buttonText: {
    position: 'relative',
    zIndex: 1,
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
