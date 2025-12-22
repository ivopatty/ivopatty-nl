import React from 'react';
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from 'tss-react/mui';
import SEO from "../components/seo";
import Twitter from "../components/visuals/twitter";
import Instagram from "../components/visuals/instagram";
import LinkedIn from "../components/visuals/linkedIn";
import Button from "@mui/material/Button";
import Github from "../components/visuals/github";

const useStyles = makeStyles()((theme) => ({
  imageWrapper: {
    [theme.breakpoints.up('md')]: {
      height: '100vh',
      overflow: 'hidden',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 20,
    }
  },
  image: {
    [theme.breakpoints.up('md')]: {
      height: '100vh',
      position: 'fixed'
    }
  },
  text: {
    padding: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      padding: theme.spacing(2),
    },
    marginTop: 64,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontSize: '3em',
    fontWeight: 800,
    [theme.breakpoints.up('md')]: {
      fontSize: '7em'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  },
  button: {
    marginTop: theme.spacing(2),
    textDecoration: 'none'
  },
  socials: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: theme.spacing(2)
  },
  icon: {
    width: 30,
    marginRight: theme.spacing(1)
  }
}));

const About = ({ data }) => {
  const { classes } = useStyles();
  return (
    <Layout>
      <SEO title={"About Me"} />
      <Grid container>
        <Grid className={classes.imageWrapper} item md={6} xs={12}>
          <GatsbyImage className={classes.image} image={data.file.childImageSharp.gatsbyImageData} alt="Ivo Patty" style={{ position: "fixed" }} />
        </Grid>
        <Grid item md={6} xs={12} className={classes.text}>
          <Typography>Hi, my name is</Typography>
          <Typography className={classes.name} variant={"h3"}>Ivo</Typography>
          <Typography>
            As a kid, one of the first books I wanted was "How does it work". I was fascinated about planes and
            wanted to know how enormous things could stay in the air. Despite the initial setback of not being able to
            become a pilot because of really terrible eyesight, I still have this insatiable curiosity.
            Fortunately for me, the world of technology is full of new and exciting developments that can quench this
            thirst.
            I love finding out how a new innovation can make the lives of the people around us better. Let's talk
            and see what we can do for each other.
          </Typography>
          <Typography style={{ marginTop: 18 }} variant={"overline"}>Developer / Consultant / Data Engineer</Typography>
          <a href="mailto:ivo@ivopatty.nl?subject=Contact%20from%20ivopatty.nl" style={{ textDecoration: 'none' }}>
            <Button className={classes.button} variant={"outlined"}>Let's Talk</Button>
          </a>
          <div className={classes.socials}>
            <a href="https://twitter.com/ivopatty" className={classes.icon}><Twitter fill={"#ababab"} /></a>
            <a href="https://instagram.com/ivopatty" className={classes.icon}><Instagram fill={"#ababab"} /></a>
            <a href="https://www.linkedin.com/in/ivopatty" className={classes.icon}><LinkedIn fill={"#ababab"} /></a>
            <a href="https://github.com/ivopatty" className={classes.icon}><Github fill={"#ababab"} /></a>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "Ivo.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 1500
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
`;

export default About
