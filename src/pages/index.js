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
      fill: theme.palette.primary.dark,
    },
    '.logo-letter': {
      fill: "#fff"
    },
    'body': {
      overflowX: 'hidden'
    }
  },
  homeContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    overflow: 'hidden'
  },
  headerImage: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed !important',
    height: 'inherit',
    width: '100vw',
    zIndex: -1,
    mixBlendMode: 'multiply'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: theme.spacing(3),
    filter: "drop-shadow( 0px 3px 15px rgba(0, 0, 0, .5))"
  },
  icon: {
    width: 50, height: 50
  },
  name: {
    color: '#fff',
    marginBottom: theme.spacing(1),
  },
  subtext: {
    color: '#fff'
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
            fill: theme.palette.primary.dark,
          },
          '.logo-letter': {
            fill: "#fff"
          },
          'body': {
            overflowX: 'hidden'
          }
        }}
      />
      <SEO title="Home" keywords={[`ivopatty`, `ivo`, `patty`, `consultant`]} />
      <div className={classes.homeContainer}>
        <GatsbyImage className={classes.headerImage} image={getImage(data.file)} alt="Background" style={{ position: "absolute" }} />
        {JSON.stringify(data.file)}
        <div className={classes.headerImage} />
        <Grow in={true} timeout={750}>
          <div>
            <Logo className={classes.logo} />
          </div>
        </Grow>

        <Slide direction={"up"} in={true} timeout={800}>
          <div>
            <Grow in={true} timeout={800}>
              <div>
                <Typography variant={"h1"} align={"center"} className={classes.name}>
                  Ivo Patty
                </Typography>
                <Typography className={classes.subtext} align={"center"}>
                  Leader / Innovator / Data Engineer / Consultant / Developer
                </Typography>
              </div>
            </Grow>
          </div>
        </Slide>
        <SocialIcons delay={800} />
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
