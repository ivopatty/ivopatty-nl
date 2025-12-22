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
  pageContainer: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at 50% 10%, rgba(17, 34, 64, 1) 0%, rgba(10, 25, 47, 1) 100%)',
    paddingBottom: theme.spacing(10),
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 56,
      padding: theme.spacing(0, 2),
    },
    marginTop: 80,
    padding: theme.spacing(0, 4),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 8),
      maxWidth: 1600,
      margin: '80px auto 0',
    },
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(4),
  },
  title: {
    fontFamily: '"Syncopate", sans-serif',
    fontWeight: 700,
    fontSize: '3.5rem',
    letterSpacing: '0.05em',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(to right, #E6F1FF 20%, #64FFDA 80%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 20px rgba(100, 255, 218, 0.2))',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subText: {
    fontFamily: '"Montserrat", sans-serif',
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    maxWidth: 600,
    margin: '0 auto',
    lineHeight: 1.6,
  },
  card: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    overflow: 'hidden',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0, left: 0, right: 0, height: '100%',
      background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(100, 255, 218, 0.06), transparent 40%)',
      opacity: 0,
      transition: 'opacity 0.5s',
      pointerEvents: 'none',
      zIndex: 2,
    },
    '&:hover': {
      transform: 'translateY(-10px)',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
      borderColor: 'rgba(100, 255, 218, 0.3)',
      boxShadow: `
        0 20px 60px 0 rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(100, 255, 218, 0.1) inset
      `,
      '&::before': {
        opacity: 1,
      },
      '& $image': {
        transform: 'scale(1.05)',
        filter: 'grayscale(0%)',
      },
    },
  },
  image: {
    height: 240,
    width: '100%',
    backgroundColor: 'rgba(10, 25, 47, 0.5)',
    borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.6s ease',
    filter: 'grayscale(30%)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3, 3, 1, 3),
    flexGrow: 1,
    zIndex: 3,
  },
  projectName: {
    fontFamily: '"Montserrat", sans-serif',
    color: '#E6F1FF',
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(1.5),
    letterSpacing: '0.02em',
  },
  projectDescription: {
    color: '#A8B2D1',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    marginBottom: theme.spacing(2.5),
    flex: 1,
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: theme.spacing(2),
  },
  chip: {
    background: 'rgba(100, 255, 218, 0.05)',
    color: '#64FFDA',
    border: '1px solid rgba(100, 255, 218, 0.1)',
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '0.7rem',
    height: 24,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.15)',
      borderColor: '#64FFDA',
      boxShadow: '0 0 10px rgba(100, 255, 218, 0.2)',
    },
  },
  cardActions: {
    padding: theme.spacing(0, 3, 3, 3),
    zIndex: 3,
  },
  learnMoreButton: {
    width: '100%',
    padding: theme.spacing(1, 0),
    color: '#64FFDA',
    borderColor: 'rgba(100, 255, 218, 0.3)',
    borderRadius: 8,
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.1)',
      borderColor: '#64FFDA',
      boxShadow: '0 0 15px rgba(100, 255, 218, 0.15)',
    },
  },
  placeholder: {
    color: theme.palette.primary.main,
    height: 80,
    width: 80,
    justifySelf: 'center',
    alignSelf: 'center',
    opacity: 0.5,
  },
  link: {
    textDecoration: 'none',
    width: '100%',
  },
}));

const Projects = ({ data }) => {
  const { classes } = useStyles();
  
  // Mouse move handler for card hover effect
  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Layout>
      <SEO title={"Projects"} />
      <div className={classes.pageContainer}>
        <Grid container className={classes.wrapper} alignItems={"stretch"} spacing={4}>
          <Grid item xs={12} className={classes.headerSection}>
            <Typography align={"center"} variant={"h1"} className={classes.title}>Projects</Typography>
            <Typography align={"center"} variant={"subtitle1"} className={classes.subText}>
              Selected works & experiments
            </Typography>
          </Grid>
          {data.contentfulHomePage.experiences.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key} alignItems={"stretch"}>
              <Card 
                className={classes.card} 
                elevation={0}
                onMouseMove={handleMouseMove}
              >
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
                  <div className={classes.chipContainer}>
                    {item.skills ? item.skills.map((skill, key) => (
                      <Chip className={classes.chip} key={key} label={skill.name} size="small" />
                    )) : null}
                  </div>
                </CardContent>
                {item.link ?
                  <CardActions className={classes.cardActions}>
                    <a href={item.link} className={classes.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        size={"small"}
                        variant="outlined"
                        className={classes.learnMoreButton}
                      >
                        Visit Project <LinkIcon style={{ marginLeft: 8, fontSize: 16 }} />
                      </Button>
                    </a>
                  </CardActions> : null
                }
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
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
