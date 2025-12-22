import React from 'react'
import Zoom from "@mui/material/Zoom";
import LinkedIn from "./visuals/linkedIn";
import Instagram from "./visuals/instagram";
import Twitter from "./visuals/twitter";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  icon: {
    width: 50,
    margin: theme.spacing(1),
  },
  iconWrap: {

    "&:hover": {}
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    marginTop: theme.spacing(2)
  }
}));

const SocialIcons = ({ delay, justify = 'center' }) => {
  const { classes } = useStyles();
  return (
    <div style={{ justifyContent: justify }} className={classes.container}>
      <Zoom in={true} timeout={400} className={classes.icon} style={{ transitionDelay: `${delay}ms` }}>
        <a href="https://www.linkedin.com/in/ivopatty" title={"Open LinkedIn profile"}
          className={classes.iconWrap}><LinkedIn /></a>
      </Zoom>
      <Zoom in={true} timeout={400} className={classes.icon} style={{ transitionDelay: `${delay + 400}ms` }}>
        <a href="https://instagram.com/ivopatty" title={"Visit @ivopatty on Instagram"}
          className={classes.iconWrap}><Instagram /></a>
      </Zoom>
      <Zoom in={true} timeout={400} className={classes.icon} style={{ transitionDelay: `${delay + 800}ms` }}>
        <a href="https://twitter.com/ivopatty" title={"Visit @ivopatty on Twitter"}
          className={classes.iconWrap}><Twitter /></a>
      </Zoom>
    </div>
  );
};

export default SocialIcons