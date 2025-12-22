import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, StaticQuery } from "gatsby"
import Header from "./header"
import ArrowUp from '@mui/icons-material/ArrowUpward';
import Typography from "@mui/material/Typography";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  footer: {
    background: 'linear-gradient(to top, rgba(17, 34, 64, 0.9) 0%, rgba(17, 34, 64, 0.7) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2.25),
    color: theme.palette.text.secondary,
  },
  footerLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  scrollButton: {
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'translateY(-2px)',
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
            <Typography variant="body2">
              © {new Date().getFullYear()} - Ivo Patty
            </Typography>
            <Typography variant="body2">
              <Link to={'/legal'} className={classes.footerLink}>Legal & Privacy</Link>
            </Typography>
            <ArrowUp className={classes.scrollButton} onClick={smoothScroll} />
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
