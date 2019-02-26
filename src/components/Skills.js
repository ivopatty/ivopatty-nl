import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Databricks from "!svg-react-loader!../images/skills/databricks.svg?name=AlgoliaLogo";
import Cassandra from '!svg-react-loader!../images/skills/cassandra.svg'
import Watson from '!svg-react-loader!../images/skills/watson.svg'
import Jupyter from '!svg-react-loader!../images/skills/jupyter.svg'
import withStyles from '@material-ui/core/styles/withStyles'

const Skills = () => (
  <Grid justify={"center"} container style={{backgroundColor: "#fff"}}>
    <Grid item xs={12}>
      <Typography>Skills</Typography>
    </Grid>
    <Grid item xs={11} md={9}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography>Data Science</Typography>
          <Skill skillName={'Databricks'} UniqueSVG={Databricks} />
          <Skill skillName={'Cassandra'} UniqueSVG={Cassandra} />
          <Skill skillName={'IBM Watson'} UniqueSVG={Watson} />
          <Skill skillName={'Jupyter'} UniqueSVG={Jupyter} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Software Development</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>DevOps</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Others</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const skillStyles = theme => ({
  svg: {
    fill: 'red',
    transition: '0.2s all ease-in-out',
    width: "90%",
    "&:hover": {
      filter: 'grayscale(0)'
    }
  }
})

const skillComponent = ({skillName, UniqueSVG, classes}) => (
  <Grid item xs={12} md={6}>
    <UniqueSVG className={classes.svg}/>
    {skillName}
  </Grid>
);

const Skill = withStyles(skillStyles)(skillComponent);



export default Skills