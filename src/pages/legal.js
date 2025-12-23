import React from 'react';
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { makeStyles } from 'tss-react/mui';
import Seo from "../components/seo";
import "../styles/animations.css";

const useStyles = makeStyles()((theme) => ({
  pageContainer: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at 50% 10%, rgba(17, 34, 64, 1) 0%, rgba(10, 25, 47, 1) 100%)',
    padding: theme.spacing(12, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 2),
    },
  },
  contentCard: {
    maxWidth: 1000,
    margin: '0 auto',
    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.75) 0%, rgba(17, 34, 64, 0.55) 100%)',
    backdropFilter: 'blur(30px) saturate(200%)',
    WebkitBackdropFilter: 'blur(30px) saturate(200%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: '2px solid rgba(255, 255, 255, 0.25)',
    borderLeft: '2px solid rgba(255, 255, 255, 0.25)',
    borderRadius: 32,
    padding: theme.spacing(8),
    boxShadow: '0 24px 64px 0 rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
      borderRadius: 24,
    },
  },
  title: {
    fontFamily: '"Syncopate", sans-serif',
    fontWeight: 800,
    fontSize: '3.5rem',
    letterSpacing: '0.08em',
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    background: 'linear-gradient(135deg, #E6F1FF 0%, #64FFDA 50%, #00D9FF 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 30px rgba(100, 255, 218, 0.4))',
    animation: 'gradientShift 8s ease infinite',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  sectionHeader: {
    fontFamily: '"Syncopate", sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#64FFDA',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  subHeader: {
    fontWeight: 600,
    fontSize: '1.2rem',
    color: '#E6F1FF',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1.5),
  },
  para: {
    color: '#A8B2D1',
    lineHeight: 1.8,
    marginBottom: theme.spacing(2.5),
    fontSize: '1.05rem',
    '& a': {
      color: '#64FFDA',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#8FFFF0',
        textDecoration: 'underline',
      },
    },
  },
  tableContainer: {
    margin: theme.spacing(4, 0),
    borderRadius: 16,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    background: 'rgba(10, 25, 47, 0.4)',
  },
  table: {
    '& th': {
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      color: '#64FFDA',
      fontWeight: 700,
      borderBottom: '1px solid rgba(100, 255, 218, 0.2)',
    },
    '& td': {
      color: '#A8B2D1',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    '& tr:last-child td': {
      borderBottom: 'none',
    },
  },
  date: {
    color: 'rgba(100, 255, 218, 0.5)',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    letterSpacing: '0.2em',
  }
}));

const Legal = () => {
  const { classes } = useStyles();
  return (
    <Layout>
      <Seo title={"Legal Notices"} />
      <Box className={classes.pageContainer}>
        <Box className={classes.contentCard}>
          <Typography className={classes.date} variant={"overline"}>Updated: 22 Feb 2019</Typography>
          <Typography className={classes.title} variant={"h1"}>
            Legal Notices
          </Typography>

          <Typography className={classes.para}>
            Welcome to the Legal side of my website! I'm surprised you clicked the link to visit this page. But without
            further ado I will run you through the licenses that this website operates on, my GDPR compliance and your
            privacy, the cookies I set and the consequences for you by using my website. Sounds dramatic doesn't it?
          </Typography>

          <Typography className={classes.sectionHeader}>Attribution</Typography>
          <Typography className={classes.para}>
            The Social Icons, on the homepage, are a derivative of <a
              href={'https://www.iconfinder.com/iconsets/social-media-icons-the-circle-set'}>
              The Circle Set</a> by <a href={'https://www.iconfinder.com/thepinkgroup'}> The Pink Group</a> licensed
            under <a href="https://creativecommons.org/licenses/by/3.0/"> CC BY 3.0</a>
          </Typography>
          <Typography className={classes.para}>
            This website is powered by <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, <a
              href="https://reactjs.org/">React</a> and <a href="https://material-ui.com">Material-UI</a> licensed under
            the MIT License
          </Typography>

          <Box sx={{ my: 4, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

          <Typography className={classes.sectionHeader}>Privacy</Typography>
          <Typography className={classes.para}>
            Your privacy is important to me. I take care to process all shared personal information confidentially. This
            Privacy Policy outlines all collected and processed personal information and is only applicable to the Ivo
            Patty website (ivopatty.nl, ivopatty.com, ivopatty.eu). Your continued use of this website outlines your acceptance
            of this Privacy Policy and the Privacy Policies of all outlined (sub)-processors in this document.
          </Typography>

          <Typography className={classes.subHeader}>Communication</Typography>
          <Typography className={classes.para}>
            When contacting me through the outlined contact methods on this website, I may retain the
            information shared with me. Information shared with me over different direct communication channels may be
            combined to improve or streamline your communication with me. Information shared through direct communication
            channels wil not be combined with information collected through automated systems unless specifically
            requested by you.
          </Typography>

          <Typography className={classes.subHeader}>Collected Information</Typography>
          <Typography className={classes.para}>
            Below is a list of the processed information, both by me and third parties when you use this website. While
            most of the information is automatically anonymized, all information is required for the website to function
            to its full capacity.
          </Typography>

          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Collector</TableCell>
                  <TableCell>Type of Information</TableCell>
                  <TableCell>Processing Purpose</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { c: 'Cloudflare', t: 'Cookies', p: 'Traffic Optimization' },
                  { c: 'Cloudflare', t: 'IP Address', p: 'Traffic Optimization' },
                  { c: 'Google Analytics', t: 'Anonymized IP Address', p: 'Analytics' },
                  { c: 'Google Analytics', t: 'Cookies', p: 'Analytics' },
                  { c: 'Google Analytics', t: 'Usage Data', p: 'Analytics' },
                  { c: 'Microsoft', t: 'Email-address', p: 'Contact' },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.c}</TableCell>
                    <TableCell>{row.t}</TableCell>
                    <TableCell>{row.p}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography className={classes.subHeader}>Cookies</Typography>
          <Typography className={classes.para}>
            Some of the third parties listed above place cookies on your device. For a more thorough explanation
            of how cookies affect you, your devices and privacy, please refer to
            the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article on Cookies</a>.
          </Typography>

          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Cookie Name</TableCell>
                  <TableCell>Usage</TableCell>
                  <TableCell>Lifetime</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { n: 'random text', u: 'Load Balancing Session Affinity', l: 'Browser Session' },
                  { n: '__cfduid', u: 'CloudFlare Load Balancing & Analytics', l: '365 days' },
                  { n: '_gat_gtag_UA_29681431_3', u: 'Google Tag Manager', l: '1 minute' },
                  { n: '_ga', u: 'Anonymized Google Analytics', l: '48 hours' },
                  { n: '_gid', u: 'Anonymized Google Analytics', l: '8 days' },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.n}</TableCell>
                    <TableCell>{row.u}</TableCell>
                    <TableCell>{row.l}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography className={classes.subHeader}>Limitations</Typography>
          <Typography className={classes.para}>
            The collected information listed above will only be used for the outlined purposes. Only on your specific
            request the information processed will be utilized for purposes not mentioned in this overview
          </Typography>

          <Typography className={classes.subHeader}>Changes</Typography>
          <Typography className={classes.para}>
            As the content and functionality of this website evolve, the privacy implications of my website on your person
            may change over time. I therefore have to reserve the right to change this Privacy Policy. Should the Privacy
            Policy change, the changes will be reflected on this page and the latest update date will be changed accordingly.
            I advise you to return to the page on a regular basis to evaluate what changes have been made.
          </Typography>

          <Typography className={classes.subHeader}>Questions</Typography>
          <Typography className={classes.para}>
            If you have questions about this Privacy Policy or about the information collected about you, please do not
            hesitate to contact me. You can reach me via email on ivo@ivopatty.nl. Please mention that your question is
            related to your privacy on my website. This will ensure your questions get the correct priority
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Legal;
