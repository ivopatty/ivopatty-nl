const animation = theme => ({
  icon: {
    fill: theme.palette.text.secondary,
    transition: 'all 0.3s ease',
    "-webkit-transition": 'all 0.3s ease',
    "&:hover": {
      transform: "scale(1.1)",
      fill: theme.palette.primary.main,
      filter: `drop-shadow(0 0 8px ${theme.palette.primary.main})`,
      "-webkit-filter": `drop-shadow(0 0 8px ${theme.palette.primary.main})`,
    }
  }
});

export default animation
