import React from "react"
import PropTypes from "prop-types"
import {graphql, Link, StaticQuery} from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./header"
import ArrowUp from '@material-ui/icons/ArrowUpward'
import Typography from "@material-ui/core/es/Typography/Typography";

const smoothScroll = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(smoothScroll);
    window.scrollTo(0, c - c / 8);
  }
};

const Layout = ({children, defaultShowMenu}) => (
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
        <CssBaseline/>
        <Header defaultShowMenu={defaultShowMenu} siteTitle={data.site.siteMetadata.title}/>
        <main>{children}</main>
        <footer style={{
          backgroundColor: '#fafafa',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 18
        }}>
          <Typography>
            © {new Date().getFullYear()} - Ivo Patty
          </Typography>
          <Typography><Link to={'/legal'} style={{textDecoration: 'none'}}>Legal & Privacy</Link></Typography>
          <ArrowUp onClick={smoothScroll}/>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  defaultShowMenu: true
};

export default Layout
