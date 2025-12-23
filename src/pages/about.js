import React from 'react';
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from 'tss-react/mui';
import Seo from "../components/seo";
import Twitter from "../components/visuals/twitter";
import Instagram from "../components/visuals/instagram";
import LinkedIn from "../components/visuals/linkedIn";
import Button from "@mui/material/Button";
import Github from "../components/visuals/github";
import "../styles/animations.css";

const useStyles = makeStyles()((theme) => ({
  pageContainer: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at 20% 30%, rgba(17, 34, 64, 1) 0%, rgba(10, 25, 47, 1) 100%)',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 80,
    paddingBottom: theme.spacing(10),
  },
  contentWrapper: {
    position: 'relative',
    maxWidth: 1400,
    margin: '0 auto',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  },
  imageSection: {
    position: 'relative',
    gridArea: 'image',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: 100,
      height: 'fit-content',
      marginBottom: 0,
    },
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 32,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(17, 34, 64, 0.6) 100%)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderTop: '2px solid rgba(255, 255, 255, 0.25)',
    borderLeft: '2px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 24px 64px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(100, 255, 218, 0.05) inset',
    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 32px 80px 0 rgba(0, 0, 0, 0.6), 0 8px 24px rgba(100, 255, 218, 0.15), 0 0 0 1px rgba(100, 255, 218, 0.1) inset',
      borderColor: 'rgba(100, 255, 218, 0.2)',
    },
    '& img': {
      filter: 'grayscale(10%) brightness(1.05)',
      transition: 'all 0.5s ease',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
      filter: 'grayscale(0%) brightness(1.1)',
    },
  },
  gridLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: '"image" "content"',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '480px 1fr',
      gridTemplateAreas: '"image content"',
      gap: theme.spacing(6),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '520px 1fr',
      gap: theme.spacing(8),
    },
  },
  contentArea: {
    gridArea: 'content',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
  heroCard: {
    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.75) 0%, rgba(17, 34, 64, 0.55) 100%)',
    backdropFilter: 'blur(28px) saturate(200%)',
    WebkitBackdropFilter: 'blur(28px) saturate(200%)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderTop: '2px solid rgba(255, 255, 255, 0.25)',
    borderLeft: '2px solid rgba(255, 255, 255, 0.25)',
    borderRadius: 28,
    padding: theme.spacing(6),
    boxShadow: '0 16px 56px 0 rgba(0, 0, 0, 0.45)',
    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      background: 'radial-gradient(circle at 50% 0%, rgba(100, 255, 218, 0.06), transparent 70%)',
      pointerEvents: 'none',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 24px 72px 0 rgba(0, 0, 0, 0.55), 0 8px 24px rgba(100, 255, 218, 0.12)',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
      borderRadius: 24,
    },
  },
  greeting: {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#A8B2D1',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
  },
  name: {
    fontSize: '5.5rem',
    fontWeight: 900,
    fontFamily: '"Syncopate", sans-serif',
    background: 'linear-gradient(135deg, #E6F1FF 0%, #64FFDA 50%, #00D9FF 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 30px rgba(100, 255, 218, 0.4))',
    animation: 'gradientShift 8s ease infinite',
    marginBottom: theme.spacing(3),
    lineHeight: 1.1,
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  role: {
    fontSize: '1.3rem',
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    color: '#64FFDA',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(4),
    filter: 'drop-shadow(0 0 10px rgba(100, 255, 218, 0.3))',
  },
  bioText: {
    fontSize: '1.1rem',
    lineHeight: 2,
    color: '#A8B2D1',
    marginBottom: theme.spacing(4),
    fontWeight: 400,
  },
  infoCard: {
    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.65) 0%, rgba(17, 34, 64, 0.45) 100%)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: '2px solid rgba(255, 255, 255, 0.2)',
    borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    padding: theme.spacing(4),
    boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      transform: 'translateX(4px)',
      boxShadow: '0 16px 56px 0 rgba(0, 0, 0, 0.5), 0 4px 16px rgba(100, 255, 218, 0.1)',
      borderColor: 'rgba(100, 255, 218, 0.2)',
    },
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  statItem: {
    textAlign: 'center',
    padding: theme.spacing(2),
    background: 'rgba(100, 255, 218, 0.05)',
    borderRadius: 16,
    border: '1px solid rgba(100, 255, 218, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.12)',
      borderColor: 'rgba(100, 255, 218, 0.3)',
      transform: 'translateY(-2px)',
    },
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#64FFDA',
    fontFamily: '"Syncopate", sans-serif',
    filter: 'drop-shadow(0 0 15px rgba(100, 255, 218, 0.4))',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#A8B2D1',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginTop: theme.spacing(0.5),
  },
  ctaSection: {
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  primaryButton: {
    padding: theme.spacing(1.5, 4),
    fontSize: '1.05rem',
    fontWeight: 600,
    borderRadius: 16,
    background: 'linear-gradient(135deg, #64FFDA 0%, #00D9FF 100%)',
    color: '#0A192F',
    border: 'none',
    boxShadow: '0 8px 24px rgba(100, 255, 218, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    textTransform: 'none',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 32px rgba(100, 255, 218, 0.5)',
      background: 'linear-gradient(135deg, #8FFFF0 0%, #4FC3F7 100%)',
    },
  },
  secondaryButton: {
    padding: theme.spacing(1.5, 4),
    fontSize: '1.05rem',
    fontWeight: 600,
    borderRadius: 16,
    color: '#64FFDA',
    borderColor: 'rgba(100, 255, 218, 0.4)',
    borderWidth: '2px',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    textTransform: 'none',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.12)',
      borderColor: '#64FFDA',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 24px rgba(100, 255, 218, 0.2)',
    },
  },
  socialSection: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
  socialIcon: {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '& svg': {
      width: 36,
      height: 36,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      transform: 'translateY(-4px) scale(1.15)',
      '& svg': {
        filter: 'drop-shadow(0 0 16px rgba(100, 255, 218, 0.8))',
      },
    },
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#E6F1FF',
    marginBottom: theme.spacing(2),
    fontFamily: '"Montserrat", sans-serif',
  },
  decorativeBlob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.15,
    pointerEvents: 'none',
    zIndex: 0,
  },
  blob1: {
    top: '10%',
    right: '10%',
    width: 400,
    height: 400,
    background: 'radial-gradient(circle, #64FFDA, transparent)',
  },
  blob2: {
    bottom: '20%',
    left: '15%',
    width: 350,
    height: 350,
    background: 'radial-gradient(circle, #00D9FF, transparent)',
  },
}));

const About = ({ data }) => {
  const { classes, cx } = useStyles();

  return (
    <Layout>
      <Seo title={"About Me"} />
      <div className={classes.pageContainer}>
        {/* Decorative background elements */}
        <div className={cx(classes.decorativeBlob, classes.blob1)} />
        <div className={cx(classes.decorativeBlob, classes.blob2)} />

        <div className={classes.contentWrapper}>
          <div className={classes.gridLayout}>
            {/* Image Section */}
            <div className={classes.imageSection}>
              <div className={classes.imageContainer}>
                <GatsbyImage
                  image={data.file.childImageSharp.gatsbyImageData}
                  alt="Ivo Patty"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className={classes.contentArea}>
              {/* Hero Card */}
              <div className={classes.heroCard}>
                <Typography className={classes.greeting}>
                  Hi, my name is
                </Typography>
                <Typography className={classes.name} variant="h1">
                  Ivo Patty
                </Typography>
                <Typography className={classes.role}>
                  Leader • Innovator • Data Engineer
                </Typography>
                <Typography className={classes.bioText}>
                  As a kid, one of the first books I wanted was "How does it work". I was fascinated about planes and
                  wanted to know how enormous things could stay in the air. Despite the initial setback of not being able to
                  become a pilot because of really terrible eyesight, I still have this insatiable curiosity.
                </Typography>
                <Typography className={classes.bioText}>
                  Fortunately for me, the world of technology is full of new and exciting developments that can quench this
                  thirst. I love finding out how a new innovation can make the lives of the people around us better.
                </Typography>

                {/* CTA Buttons */}
                <div className={classes.ctaSection}>
                  <a href="mailto:ivo@ivopatty.nl?subject=Contact%20from%20ivopatty.nl" style={{ textDecoration: 'none' }}>
                    <Button className={classes.primaryButton} variant="contained">
                      Let's Talk
                    </Button>
                  </a>
                  <Button href="https://static.ip-cloud.nl/LICV.pdf" className={classes.secondaryButton} variant="outlined">
                    Download CV
                  </Button>
                </div>

                {/* Social Icons */}
                <div className={classes.socialSection}>
                  <a href="https://linkedin.com/in/ivopatty" className={classes.socialIcon}>
                    <LinkedIn />
                  </a>
                  <a href="https://github.com/ivopatty" className={classes.socialIcon}>
                    <Github />
                  </a>
                  <a href="https://twitter.com/ivopatty" className={classes.socialIcon}>
                    <Twitter />
                  </a>
                  <a href="https://instagram.com/ivopatty" className={classes.socialIcon}>
                    <Instagram />
                  </a>
                </div>
              </div>

              {/* Stats/Info Card */}
              <div className={classes.infoCard}>
                <Typography className={classes.sectionTitle}>
                  Quick Facts
                </Typography>
                <div className={classes.statsGrid}>
                  <div className={classes.statItem}>
                    <div className={classes.statNumber}>8+</div>
                    <div className={classes.statLabel}>Years Experience</div>
                  </div>
                  <div className={classes.statItem}>
                    <div className={classes.statNumber}>20+</div>
                    <div className={classes.statLabel}>Projects</div>
                  </div>
                  <div className={classes.statItem}>
                    <div className={classes.statNumber}>3+</div>
                    <div className={classes.statLabel}>Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "Ivo.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
`;

export default About
