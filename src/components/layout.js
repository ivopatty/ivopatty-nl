import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, StaticQuery } from "gatsby"
import Header from "./header"
import ArrowUp from '@mui/icons-material/ArrowUpward';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from 'tss-react/mui';
import LinkedIn from "./visuals/linkedIn";
import Github from "./visuals/github";
import Twitter from "./visuals/twitter";
import Instagram from "./visuals/instagram";

const useStyles = makeStyles()((theme) => ({
  footer: {
    background: 'linear-gradient(to top, rgba(17, 34, 64, 0.95) 0%, rgba(10, 25, 47, 0.8) 100%)',
    backdropFilter: 'blur(30px) saturate(200%)',
    WebkitBackdropFilter: 'blur(30px) saturate(200%)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 -12px 48px 0 rgba(0, 0, 0, 0.5)',
    zIndex: 100,
    padding: theme.spacing(8, 6, 4),
    color: '#A8B2D1',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3), transparent)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 3, 4),
      textAlign: 'center',
    },
  },
  footerLink: {
    textDecoration: 'none',
    color: '#A8B2D1',
    fontWeight: 400,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'block',
    marginBottom: theme.spacing(1.5),
    width: 'fit-content',
    '&:hover': {
      color: theme.palette.primary.main,
      paddingLeft: theme.spacing(1),
      filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.4))',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 12px',
    },
  },
  footerTitle: {
    color: '#E6F1FF',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontSize: '0.9rem',
  },
  brandText: {
    fontSize: '1.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #E6F1FF 0%, #64FFDA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(2),
  },
  socialIcon: {
    marginRight: theme.spacing(2),
    color: '#A8B2D1',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    padding: theme.spacing(1),
    '& svg': {
      width: 20,
      height: 20,
    },
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'translateY(-4px)',
      filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.6))',
    },
  },
  scrollButton: {
    cursor: 'pointer',
    color: '#64FFDA',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: theme.spacing(1),
    borderRadius: '50%',
    background: 'rgba(100, 255, 218, 0.1)',
    border: '2px solid rgba(100, 255, 218, 0.3)',
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '#8FFFF0',
      transform: 'translateY(-6px) scale(1.1)',
      background: 'rgba(100, 255, 218, 0.2)',
      borderColor: 'rgba(100, 255, 218, 0.6)',
      boxShadow: '0 0 20px rgba(100, 255, 218, 0.4)',
    },
  },
}));

const smoothScroll = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(smoothScroll);
    window.scrollTo(0, c - c / 8);
  }
};

const Layout = ({ children, defaultShowMenu }) => {
  const { classes } = useStyles();

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header defaultShowMenu={defaultShowMenu} siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer className={classes.footer}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography className={classes.brandText}>
                  Ivo Patty
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 3, maxWidth: 300, mx: { xs: 'auto', md: 0 } }}>
                  Driving innovation through data engineering and leadership. Building the future of intelligent systems.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap', gap: 1 }}>
                  <a href="https://linkedin.com/in/ivopatty" className={classes.socialIcon}><LinkedIn /></a>
                  <a href="https://github.com/ivopatty" className={classes.socialIcon}><Github /></a>
                  <a href="https://twitter.com/ivopatty" className={classes.socialIcon}><Twitter /></a>
                  <a href="https://instagram.com/ivopatty" className={classes.socialIcon}><Instagram /></a>
                </Box>
              </Grid>

              <Grid item xs={6} md={2}>
                <Typography className={classes.footerTitle}>Navigation</Typography>
                <Link to="/" className={classes.footerLink}>Home</Link>
                <Link to="/projects" className={classes.footerLink}>Projects</Link>
                <Link to="/about" className={classes.footerLink}>About</Link>
              </Grid>

              <Grid item xs={6} md={3}>
                <Typography className={classes.footerTitle}>Legal</Typography>
                <Link to="/legal" className={classes.footerLink}>Privacy Policy</Link>
                <Link to="/legal" className={classes.footerLink}>Cookie Usage</Link>
                <Link to="/legal" className={classes.footerLink}>Licenses</Link>
              </Grid>

              <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, justifyContent: 'space-between' }}>
                <ArrowUp className={classes.scrollButton} onClick={smoothScroll} sx={{ mb: 2 }} />
                <Box sx={{ mt: 'auto', textAlign: { xs: 'center', md: 'right' } }}>
                  <Typography variant="caption" sx={{ display: 'block', color: 'rgba(168, 178, 209, 0.5)' }}>
                    Built with Gatsby & React
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(168, 178, 209, 0.8)' }}>
                    © {new Date().getFullYear()} Ivo Patty
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </footer>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  defaultShowMenu: true
};

export default Layout
