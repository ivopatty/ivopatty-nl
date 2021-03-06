import React from 'react'
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Img from 'gatsby-image'
import Chip from "@material-ui/core/Chip/Chip";
import SEO from "../components/seo";
import withStyles from '@material-ui/core/styles/withStyles'
import Public from "@material-ui/icons/Public"
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Link from "@material-ui/icons/Link";

const styles = theme => ({
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
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
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
});

const Projects = ({data, classes}) => (
  <Layout>
    <SEO title={"Projects"}/>
    <Grid container className={classes.wrapper} alignItems={"stretch"}>
      <Grid item xs={12} className={classes.text}>
        <Typography align={"center"} variant={"h1"}>Projects</Typography>
        <Typography align={"center"} variant={"subtitle1"} className={classes.subText}>An overview of the things I have
          worked on</Typography>
      </Grid>
      {data.allContentfulProject.edges.map((item, key) => (
        <Grid style={{padding: 10}} item xs={12} md={4} lg={3} key={key} alignItems={"stretch"}>
          <Card className={classes.card}>
            {item.node.image ?
              <Img className={classes.image} fluid={item.node.image.fluid}/>
              :
              <div className={classes.image}>
                <Public className={classes.placeholder}/>
              </div>
            }
            <CardContent>
              <Typography variant={"h5"}>{item.node.name}</Typography>
              <Typography>{item.node.description.description}</Typography>
              <div style={{marginTop: 5}}>
                {item.node.skills ? item.node.skills.map((skill, key) => (
                  <Chip className={classes.chip} key={key} label={skill.name}/>
                )) : null}
              </div>
            </CardContent>
            {item.node.link ?
              <CardActions style={{paddingTop: 0}}>
                <a href={item.node.link} className={classes.link}>
                  <Button size={"small"} color={"primary"}>
                    <Link style={{marginRight: 4}}/>Learn More
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

export default withStyles(styles)(Projects)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulProject(filter: {node_locale: {eq: "en-US"}}, sort: {fields: [order], order: ASC}) {
      edges {
        node {
          name
          description{
            description
          }
          skills{
            name
          }
          image{
            fluid(maxWidth: 400, quality: 80){
              ...GatsbyContentfulFluid_withWebp
            }
          }
          link
        }
      }
    }
  }
`;
