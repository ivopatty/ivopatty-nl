import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { makeStyles } from 'tss-react/mui';
import Typography from "@mui/material/Typography";
import Logo from "../components/visuals/logo"
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import SocialIcons from "../components/socialIcons";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/timeline.css"
import "../styles/animations.css"
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
    opacity: 0.15,
    objectFit: 'cover',
    filter: 'blur(3px)',
  },
  headerImageOverlay: {
    position: 'fixed !important',
    height: '100vh',
    width: '100vw',
    zIndex: -1,
    background: 'radial-gradient(circle at 50% 20%, rgba(10, 25, 47, 0.75) 0%, rgba(10, 25, 47, 0.9) 50%, rgba(10, 25, 47, 0.95) 100%)',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: theme.spacing(5),
    filter: `drop-shadow(0px 0px 40px ${theme.palette.primary.main}60)`,
    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
    animation: 'float 6s ease-in-out infinite',
    '&:hover': {
      transform: 'scale(1.08) rotate(8deg)',
      filter: `drop-shadow(0px 0px 60px ${theme.palette.primary.main}90) drop-shadow(0px 0px 80px ${theme.palette.primary.main}40)`,
    },
    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 150,
      marginBottom: theme.spacing(3),
    },
  },
  name: {
    marginBottom: theme.spacing(3),
    fontSize: '5.5rem',
    fontWeight: 800,
    fontFamily: '"Syncopate", sans-serif',
    letterSpacing: '0.12em',
    background: 'linear-gradient(135deg, #E6F1FF 0%, #64FFDA 50%, #00D9FF 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 30px rgba(100, 255, 218, 0.4)) drop-shadow(0 0 60px rgba(100, 255, 218, 0.2))',
    animation: 'gradientShift 8s ease infinite',
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem',
      letterSpacing: '0.08em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      letterSpacing: '0.05em',
    },
  },
  subtext: {
    color: '#A8B2D1',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '1.3rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(7),
    maxWidth: '900px',
    lineHeight: 1.8,
    filter: 'drop-shadow(0 0 10px rgba(168, 178, 209, 0.2))',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
      marginBottom: theme.spacing(4),
      letterSpacing: '0.12em',
    },
  },
  socialGlassPill: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
