const animation = theme => ({
  icon: {
    fill: theme.palette.primary.light,
    transition: '0.2s all ease-in-out',
    "-webkit-transition": '0.2s all ease-in-out',
    "&:hover": {
      transform: "scale(1.1)",
      filter: "drop-shadow( 0px 3px 15px rgba(0, 0, 0, .5))",
      "-webkit-filter": "drop-shadow( 0px 3px 15px rgba(0, 0, 0, .5))",
    }
  }
});

export default animation
