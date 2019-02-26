import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Logo from "../components/visuals/logo"
import Grow from "@material-ui/core/Grow/Grow";
import Slide from "@material-ui/core/Slide/Slide";
import SocialIcons from "../components/socialIcons";
import {graphql} from 'gatsby'
import Img from "gatsby-image"
import "../styles/timeline.css"
import Experience from "../components/experience";

const styles = (theme) => ({
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
    marginBottom: theme.spacing.unit * 3,
    filter: "drop-shadow( 0px 3px 15px rgba(0, 0, 0, .5))"
  },
  icon: {
    width: 50, height: 50
  },
  name: {
    color: '#fff',
    marginBottom: theme.spacing.unit,
  },
  subtext: {
    color: '#fff'
  }
});

const IndexPage = ({classes, data}) => (
  <Layout defaultShowMenu={false}>
    <SEO title="Home" keywords={[`ivopatty`, `ivo`, `patty`, `consultant`]}/>
    <div className={classes.homeContainer}>
      <Img className={classes.headerImage} fluid={data.file.childImageSharp.fluid}/>
      <div className={classes.headerImage}/>
      <Grow in={true} timeout={750}>
        <div>
          <Logo className={classes.logo}/>
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
                Innovator / Data Scientist / Consultant / Developer
              </Typography>
            </div>
          </Grow>
        </div>
      </Slide>
      <SocialIcons delay={800}/>
    </div>
    <Experience/>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default withStyles(styles)(IndexPage)
