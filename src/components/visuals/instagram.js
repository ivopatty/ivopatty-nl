import React from 'react'
import styles from './iconHoverAnimation'
import withStyles from '@material-ui/core/styles/withStyles'

const Instagram = ({ classes, fill }) => (
  <div className={classes.icon}>

  <svg enableBackground="new 0 0 48 48" id="Layer_1" version="1.1" viewBox="0 0 48 48"
       xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill={fill}/>
    <path d="M31.2,12.3H16.8c-2.5,0-4.5,2-4.5,4.5v4.8v9.6c0,2.5,2,4.5,4.5,4.5h14.4c2.5,0,4.5-2,4.5-4.5v-9.6v-4.8  C35.7,14.3,33.7,12.3,31.2,12.3z M32.5,15l0.5,0v0.5V19l-4,0l0-4L32.5,15z M20.7,21.6c0.7-1,2-1.7,3.3-1.7s2.6,0.7,3.3,1.7  c0.5,0.7,0.8,1.5,0.8,2.4c0,2.3-1.9,4.1-4.1,4.1s-4.1-1.8-4.1-4.1C19.9,23.1,20.2,22.3,20.7,21.6z M33.4,31.2c0,1.2-1,2.2-2.2,2.2  H16.8c-1.2,0-2.2-1-2.2-2.2v-9.6h3.5c-0.3,0.7-0.5,1.6-0.5,2.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4c0-0.8-0.2-1.7-0.5-2.4  h3.5V31.2z"
          fill="#FFFFFF"/></svg>
  </div>
);

export default withStyles(styles)(Instagram)