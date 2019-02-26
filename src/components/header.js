import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from 'gatsby'
import withStyles from '@material-ui/core/styles/withStyles'
import Person from '@material-ui/icons/Person'
import Button from "@material-ui/core/Button/Button";
import Brush from '@material-ui/icons/Brush'

const styles = theme => ({
  homeLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0) "
  },
  banner: {
    transition: 'all 0.2s linear',
  },
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  buttonText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: this.props.defaultShowMenu
    }
  }

  scrollAction = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 0) {
      this.setState({showMenu: true})
    } else if (!this.props.defaultShowMenu) {
      this.setState({showMenu: false})
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollAction, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollAction)
  }

  render() {
    const {siteTitle, classes} = this.props;
    const {showMenu} = this.state;
    return (
      <header>
        <AppBar className={`${showMenu ? "" : classes.transparent} ${classes.banner}`} position="fixed" color="primary">
          <Toolbar style={{justifyContent: 'space-between'}}>
            <Typography variant="h6" color="inherit">
              <Link to={'/'} className={classes.homeLink}>{siteTitle}</Link>
            </Typography>
            <div>
              <Link to={'/projects/'} className={classes.homeLink}>
                <Button className={classes.button} color={"inherit"} variant={"text"}>
                  <Brush className={classes.icon}/>
                  <span className={classes.buttonText}>Projects</span>
                </Button>
              </Link>
              <Link to={'/about/'} className={classes.homeLink}>
                <Button className={classes.button} color={"inherit"} variant={"text"}>
                  <Person className={classes.icon}/>
                  <span className={classes.buttonText}>About</span>
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  defaultShowMenu: true
};

export default withStyles(styles)(Header)
