import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from 'tss-react/mui';
import Typography from "@mui/material/Typography";
import Logo from "../components/visuals/logo"
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import SocialIcons from "../components/socialIcons";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/timeline.css"
import Experience from "../components/experience";
import { useStyles as styleFunc } from "tss-react/mui";
import { GlobalStyles } from "tss-react";

const useStyles = makeStyles()((theme) => ({
  '@global': {
    ".logo-circle": {
      fill: theme.palette.background.paper,
    },
    '.logo-letter': {
      fill: theme.palette.primary.main
    },
    'body': {
      overflowX: 'hidden'
    }
  },
  homeContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    overflow: 'hidden',
    position: 'relative',
    background: 'transparent',
    padding: theme.spacing(4),
  },
  headerImage: {
    position: 'fixed !important',
    height: '100vh',
    width: '100vw',
    zIndex: -1,
    opacity: 0.2,
    objectFit: 'cover',
  },
  headerImageOverlay: {
    position: 'fixed !important',
    height: '100vh',
    width: '100vw',
    zIndex: -1,
    background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.85) 0%, rgba(17, 34, 64, 0.75) 100%)',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: theme.spacing(4),
    filter: `drop-shadow(0px 0px 30px ${theme.palette.primary.main}50)`,
    transition: 'transform 0.5s ease, filter 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05) rotate(5deg)',
      filter: `drop-shadow(0px 0px 50px ${theme.palette.primary.main}80)`,
    },
    [theme.breakpoints.down('sm')]: {
      width: 140,
      height: 140,
      marginBottom: theme.spacing(3),
    },
  },
  name: {
    marginBottom: theme.spacing(2),
    fontSize: '5rem',
    fontWeight: 700,
    fontFamily: '"Syncopate", sans-serif',
    letterSpacing: '0.1em',
    background: 'linear-gradient(to right, #E6F1FF 20%, #64FFDA 80%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 20px rgba(100, 255, 218, 0.3))',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem',
      letterSpacing: '0.05em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
      letterSpacing: '0.05em',
    },
  },
  subtext: {
    color: theme.palette.text.secondary,
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 400,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(6),
    maxWidth: '800px',
    lineHeight: 1.6,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginBottom: theme.spacing(4),
    },
  },
  socialGlassPill: {
    // background: 'rgba(255, 255, 255, 0.03)',
    // backdropFilter: 'blur(16px) saturate(180%)',
    // WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    // border: '1px solid rgba(255, 255, 255, 0.1)',
    // borderRadius: 50,
    // padding: theme.spacing(1.5, 4),
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    // transition: 'all 0.3s ease',
    // '&:hover': {
    //   background: 'rgba(255, 255, 255, 0.08)',
    //   boxShadow: '0 8px 32px 0 rgba(100, 255, 218, 0.15)',
    //   borderColor: 'rgba(100, 255, 218, 0.3)',
    //   transform: 'translateY(-2px)',
    // }
  }
}));

const IndexPage = ({ data }) => {
  const { classes } = useStyles();
  const { theme } = styleFunc();

  return (
    <Layout defaultShowMenu={false}>
      <GlobalStyles
        styles={{
          ".logo-circle": {
            fill: theme.palette.background.paper,
          },
          '.logo-letter': {
            fill: theme.palette.primary.main
          },
          'body': {
            overflowX: 'hidden'
          }
        }}
      />
      <SEO title="Home" keywords={[`ivopatty`, `ivo`, `patty`, `consultant`]} />
      <div className={classes.homeContainer}>
        <GatsbyImage className={classes.headerImage} image={getImage(data.file)} alt="Background" style={{ position: "absolute" }} />
        <div className={classes.headerImageOverlay} />

        <div className={classes.contentWrapper}>
          <Grow in={true} timeout={1000}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Logo className={classes.logo} />
            </div>
          </Grow>

          <Slide direction={"up"} in={true} timeout={1200}>
            <div>
              <Typography variant={"h1"} align={"center"} className={classes.name}>
                IVO PATTY
              </Typography>
            </div>
          </Slide>

          <Slide direction={"up"} in={true} timeout={1400}>
            <div>
              <Typography className={classes.subtext} align={"center"} variant="body1">
                Leader &bull; Innovator &bull; Data Engineer &bull; Consultant
              </Typography>
            </div>
          </Slide>

          <Grow in={true} timeout={1600}>
            <div className={classes.socialGlassPill}>
              <SocialIcons delay={1600} />
            </div>
          </Grow>
        </div>
      </div>
      <Experience />
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 1500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
`;

export default IndexPage
