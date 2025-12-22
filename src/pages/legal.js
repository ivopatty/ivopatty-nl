import React from 'react'
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { withStyles } from "@mui/styles"

const styles = theme => ({
  header: {
    margin: "16px 0 16px 0"
  }
});

const Legal = ({ classes }) => (
  <Layout>
    <Grid style={{ marginTop: 70 }} container justify={"center"}>
      <Grid item xs={11} md={7}>
        <Typography align={"center"} variant={"h2"}>
          Legal Notices
        </Typography>
      </Grid>
      <Grid item xs={11} md={7}>
        <Typography variant={"overline"}>22 feb 2019</Typography>
        <Typography>
          Welcome to the Legal side of my website! I'm surprised you clicked the link to visit this page. But without
          further ado I will run you through the licenses that this website operates on, my GDPR compliance and your
          privacy, the cookies I set and the consequences for you by using my website. Sounds dramatic doesn't it?
        </Typography>
        <Typography variant={"h4"} className={classes.header}>Attribution</Typography>
        <Typography>
          The Social Icons, on the homepage, are a derivative of <a
            href={'https://www.iconfinder.com/iconsets/social-media-icons-the-circle-set'}>
            The Circle Set</a> by <a href={'https://www.iconfinder.com/thepinkgroup'}> The Pink Group</a> licensed
          under <a href="https://creativecommons.org/licenses/by/3.0/"> CC BY 3.0</a>
        </Typography>
        <Typography>
          This website is powered by <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, <a
            href="https://reactjs.org/">React</a> and <a href="https://material-ui.com">Material-UI</a> licensed under
          the MIT License
        </Typography>
        <hr />
        <Typography variant={"h4"} className={classes.header}>Privacy</Typography>
        <Typography>
          Your privacy is important to me. I take care to process all shared personal information confidentially. This
          Privacy Policy outlines all collected and processed personal information and is only applicable to the Ivo
          Patty
          website (ivopatty.nl, ivopatty.com, ivopatty.eu). Your continued use of this website outlines your acceptance
          of this Privacy Policy and the Privacy Policies of all outlined (sub)-processors in this document.
        </Typography>
        <Typography variant={"h5"} className={classes.header}>Communication</Typography>
        <Typography>
          When contacting me through the outlined contact methods on this website, I may retain the
          information shared with me. Information shared with me over different direct communication channels may be
          combined to improve or streamline your communication with me. Information shared through direct communication
          channels wil not be combined with information collected through automated systems unless specifically
          requested by you.
        </Typography>
        <Typography variant={"h5"} className={classes.header}>Collected Information</Typography>
        <Typography>
          Below is a list of the processed information, both by me and third parties when you use this website. While
          most of the information is automatically anonymized, all information is required for the website to function
          to its full capacity.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Collector</TableCell>
              <TableCell>Type of Information</TableCell>
              <TableCell>Processing Purpose</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Cloudflare</TableCell>
              <TableCell>Cookies</TableCell>
              <TableCell>Traffic Optimization</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cloudflare</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Traffic Optimization</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Analytics</TableCell>
              <TableCell>Anonymized IP Address</TableCell>
              <TableCell>Analytics</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Analytics</TableCell>
              <TableCell>Cookies</TableCell>
              <TableCell>Analytics</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Analytics</TableCell>
              <TableCell>Usage Data</TableCell>
              <TableCell>Analytics</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft</TableCell>
              <TableCell>Email-address</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant={"h5"} className={classes.header}>Cookies</Typography>
        <Typography>
          Some of the third parties listed above place cookies on your device. For a more thorough explanation
          of how cookies affect you, your devices and privacy, please refer to
          the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article on Cookies</a>.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cookie Name</TableCell>
              <TableCell>Usage</TableCell>
              <TableCell>Lifetime</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>random text</TableCell>
              <TableCell>Load Balancing Session Affinity</TableCell>
              <TableCell>Browser Session</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>__cfduid</TableCell>
              <TableCell>CloudFlare Load Balancing & Analytics</TableCell>
              <TableCell>365 days</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>_gat_gtag_UA_29681431_3</TableCell>
              <TableCell>Google Tag Manager</TableCell>
              <TableCell>1 minute</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>_ga</TableCell>
              <TableCell>Anonymized Google Analytics</TableCell>
              <TableCell>48 hours</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>_gid</TableCell>
              <TableCell>Anonymized Google Analytics</TableCell>
              <TableCell>8 days</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant={"h5"} className={classes.header}>Limitations</Typography>
        <Typography>
          The collected information listed above will only be used for the outlined purposes. Only on your specific
          request the information processed will be utilized for purposes not mentioned in this overview
        </Typography>
        <Typography variant={"h5"} className={classes.header}>Changes</Typography>
        <Typography>
          As the content and functionality of this website evolve, the privacy implications of my website on your person
          may change over time. I therefore have to reserve the right to change this Privacy Policy. Should the Privacy
          Policy change, the changes will be reflected on this page and the latest update date will be changed accordingly.
          I advise you to return to the page on a regular basis to evaluate what changes have been made.
        </Typography>
        <Typography variant={"h5"} className={classes.header}>Questions</Typography>
        <Typography>
          If you have questions about this Privacy Policy or about the information collected about you, please do not
          hesitate to contact me. You can reach me via email on ivo@ivopatty.nl. Please mention that your question is
          related to your privacy on my website. This will ensure your questions get the correct priority
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

export default withStyles(styles)(Legal)
