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
    height: 220,
    width: '100%',
    backgroundColor: 'rgba(17, 34, 64, 0.3)',
    borderBottom: `1px solid rgba(100, 255, 218, 0.1)`,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.4s ease',
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 56
    },
    marginTop: 64,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 6),
    },
  },
  text: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5)
  },
  title: {
    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  subText: {
    paddingTop: 4,
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
  },
  card: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(100, 255, 218, 0.15)',
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0 8px 32px 0 rgba(10, 25, 47, 0.3), 0 2px 8px 0 rgba(100, 255, 218, 0.08)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-8px)',
      background: 'rgba(255, 255, 255, 0.08)',
      border: `1px solid rgba(100, 255, 218, 0.4)`,
      boxShadow: `
        0 16px 56px 0 rgba(10, 25, 47, 0.5),
        0 4px 16px 0 rgba(100, 255, 218, 0.25)
      `,
      '& $image': {
        transform: 'scale(1.05)',
      },
    },
  },
  placeholder: {
    color: theme.palette.primary.main,
    height: 100,
    width: 100,
    justifySelf: 'center',
    alignSelf: 'center',
    opacity: 0.6,
  },
  chip: {
    marginRight: 6,
    marginTop: 8,
    background: 'rgba(100, 255, 218, 0.1)',
    color: theme.palette.primary.main,
    border: '1px solid rgba(100, 255, 218, 0.2)',
    fontWeight: 500,
    fontSize: '0.75rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.2)',
      border: '1px solid rgba(100, 255, 218, 0.4)',
    },
  },
  link: {
    textDecoration: 'none'
  },
  projectName: {
    color: '#E6F1FF',
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  projectDescription: {
    color: '#8892B0',
    lineHeight: 1.7,
    marginBottom: theme.spacing(2),
    flex: 1,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  cardActions: {
    padding: theme.spacing(0, 3, 3, 3),
  },
  learnMoreButton: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.1)',
      borderColor: theme.palette.primary.light,
      transform: 'translateX(4px)',
      boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
    },
  },
}));

const Projects = ({ data }) => {
  const { classes } = useStyles();
  return (
    <Layout>
      <SEO title={"Projects"} />
      <Grid container className={classes.wrapper} alignItems={"stretch"} spacing={4}>
        <Grid item xs={12} className={classes.text}>
          <Typography align={"center"} variant={"h1"} className={classes.title}>Projects</Typography>
          <Typography align={"center"} variant={"subtitle1"} className={classes.subText}>An overview of the things I have
            worked on</Typography>
        </Grid>
        {data.contentfulHomePage.experiences.map((item, key) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key} alignItems={"stretch"}>
            <Card className={classes.card} elevation={0}>
              {item.image ?
                <GatsbyImage className={classes.image} image={item.image.gatsbyImageData} alt={item.name} />
                :
                <div className={classes.image}>
                  <Public className={classes.placeholder} />
                </div>
              }
              <CardContent className={classes.cardContent}>
                <Typography variant={"h5"} className={classes.projectName}>{item.name}</Typography>
                <Typography className={classes.projectDescription}>{item.description.description}</Typography>
                <div>
                  {item.skills ? item.skills.map((skill, key) => (
                    <Chip className={classes.chip} key={key} label={skill.name} size="small" />
                  )) : null}
                </div>
              </CardContent>
              {item.link ?
                <CardActions className={classes.cardActions}>
                  <a href={item.link} className={classes.link}>
                    <Button
                      size={"small"}
                      variant="outlined"
                      className={classes.learnMoreButton}
                    >
                      <LinkIcon style={{ marginRight: 6 }} />Learn More
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
