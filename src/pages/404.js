import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  homeContainer: {
    '@media (min-width: 600px)': {
      height: 'calc(100vh - 64px)'
    },
    height: 'calc(100vh - 56px)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none'
  }
}));

const NotFoundPage = () => {
  const { classes } = useStyles();
  return (
    <Layout>
      <SEO title="404 | Not found" />
      <Grid className={classes.homeContainer} container justify={"center"} alignContent={"center"}>
        <Typography variant={"h1"}>
          404
        </Typography>
        <a href={`https://github.com/ivopatty/ivopatty-nl/issues`} className={classes.link}>
          <Typography variant={"overline"}>
            Submit a pull request
          </Typography>
        </a>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage
