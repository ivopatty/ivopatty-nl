import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  homeContainer: {
    '@media (min-width: 600px)': {
      height: 'calc(100vh - 64px)'
    },
    height: 'calc(100vh - 56px)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const NotFoundPage = ({ classes }) => (
  <Layout>
    <SEO title="404 | Not found" />
    <Grid className={classes.homeContainer} container justify={"center"} alignContent={"center"}>
      <Typography variant={"h1"}>
        404
      </Typography>
      <Typography variant={"overline"}>
        Submit a pull request
      </Typography>
    </Grid>
  </Layout>
)


export default withStyles(styles)(NotFoundPage)
