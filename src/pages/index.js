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
    background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7) 0%, rgba(17, 34, 64, 0.6) 100%)',
  },
  heroGlassCard: {
    background: 'rgba(17, 34, 64, 0.4)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 24,
    padding: theme.spacing(6),
    boxShadow: '0 8px 32px 0 rgba(10, 25, 47, 0.37)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
      borderRadius: 16,
    },
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: theme.spacing(3),
    filter: `drop-shadow(0px 0px 20px ${theme.palette.primary.main}40)`,
    transition: 'filter 0.3s ease',
    '&:hover': {
      filter: `drop-shadow(0px 0px 30px ${theme.palette.primary.main}60)`,
    },
  },
  icon: {
    width: 50, height: 50
  },
  name: {
    marginBottom: theme.spacing(1),
    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 800,
  },
  subtext: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
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
        <Grow in={true} timeout={750}>
          <div className={classes.heroGlassCard}>
            <Logo className={classes.logo} />
            <Slide direction={"up"} in={true} timeout={800}>
              <div>
                <Grow in={true} timeout={800}>
                  <div>
                    <Typography variant={"h1"} align={"center"} className={classes.name}>
                      Ivo Patty
                    </Typography>
                    <Typography className={classes.subtext} align={"center"} variant="body1">
                      Leader / Innovator / Data Engineer / Consultant / Developer
                    </Typography>
                  </div>
                </Grow>
              </div>
            </Slide>
            <SocialIcons delay={800} />
          </div>
        </Grow>
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
