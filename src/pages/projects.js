import React from 'react'
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { GatsbyImage } from "gatsby-plugin-image";
import Chip from "@mui/material/Chip";
import SEO from "../components/seo";
import { makeStyles } from 'tss-react/mui';
import Public from "@mui/icons-material/Public";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";

const useStyles = makeStyles()((theme) => ({
  "globals": {
    "body": {
      overflowX: 'hidden'
    }
  },
  image: {
    height: 180,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 56
    },
    marginTop: 64
  },
  text: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  subText: {
    paddingTop: 4
  },
  card: {
    height: "100%",
    display: 'flex',
    flexWrap: 'wrap'
  },
  placeholder: {
    color: "#fff",
    height: 100,
    width: 100,
    justifySelf: 'center',
    alignSelf: 'center'
  },
  chip: {
    marginRight: 6,
    marginTop: 8
  },
  link: {
    textDecoration: 'none'
  }
}));

const Projects = ({ data }) => {
  const { classes } = useStyles();
  return (
    <Layout>
      <SEO title={"Projects"} />
      <Grid container className={classes.wrapper} alignItems={"stretch"}>
        <Grid item xs={12} className={classes.text}>
          <Typography align={"center"} variant={"h1"}>Projects</Typography>
          <Typography align={"center"} variant={"subtitle1"} className={classes.subText}>An overview of the things I have
            worked on</Typography>
        </Grid>
        {data.contentfulHomePage.experiences.map((item, key) => (
          <Grid style={{ padding: 10 }} item xs={12} md={4} lg={3} key={key} alignItems={"stretch"}>
            <Card className={classes.card}>
              {item.image ?
                <GatsbyImage className={classes.image} image={item.image.gatsbyImageData} alt={item.name} />
                :
                <div className={classes.image}>
                  <Public className={classes.placeholder} />
                </div>
              }
              <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant={"h5"}>{item.name}</Typography>
                <Typography>{item.description.description}</Typography>
                <div style={{ marginTop: 5 }}>
                  {item.skills ? item.skills.map((skill, key) => (
                    <Chip className={classes.chip} key={key} label={skill.name} />
                  )) : null}
                </div>
              </CardContent>
              {item.link ?
                <CardActions style={{ paddingTop: 0 }}>
                  <a href={item.link} className={classes.link}>
                    <Button size={"small"} color={"primary"}>
                      <LinkIcon style={{ marginRight: 4 }} />Learn More
                    </Button>
                  </a>
                </CardActions> : null
              }
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Projects

export const pageQuery = graphql`
  query BlogIndexQuery {
    contentfulHomePage{
      experiences{
          name
          description{
            description
          }
          skills{
            name
          }
          image{
            gatsbyImageData(layout: FULL_WIDTH, width: 400, quality: 80, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          link
        }
      }
    }
`;
