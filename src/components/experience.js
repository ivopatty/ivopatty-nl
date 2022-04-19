import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component/dist-es6";
import MultilineChart from "@material-ui/icons/MultilineChart";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Stars from "@material-ui/icons/Stars"
import School from "@material-ui/icons/School";
import Straighten from "@material-ui/icons/Straighten"
import Search from "@material-ui/icons/Search";
import DesktopMac from '@material-ui/icons/DesktopMac'
import "../styles/timeline.css"
import withStyles from '@material-ui/core/styles/withStyles';
import AssistantPhoto from '@material-ui/icons/AssistantPhoto';
import ParticleEmitter from "./visuals/particleEmitter";

const styles = theme => ({
  work: {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    backgroundColor: theme.palette.primary.light
  },
  buttonLink: {
    textDecoration: 'none',
    marginTop: theme.spacing.unit,
    "@media (max-width: 1200px)": {
      marginLeft: theme.spacing.unit
    }
  }
});

const Experience = ({classes}) => (
  <div className={classes.work} id={"experience"}>
    <ParticleEmitter/>
    <VerticalTimeline>
    <VerticalTimelineElement
          date={"2022 - present"}
          iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={<MultilineChart/>}
      >
        <Typography variant={"h5"}>Data Engineer</Typography>
        <Typography>Cloud Technology Solutions | Utrecht</Typography>
        <Typography>
          I currently work as a Data Engineer within Cloud Technology Solutions. Here I specialize in Google Cloud platform
          implementations of data products. I help CTS customers modernize their infrastructure and get from data to insights.
        </Typography>
        <a className={classes.buttonLink} href="https://cts.co">
          <Button className={classes.buttonLink} variant={"outlined"}>
            Learn More
          </Button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          date={"2020 - 2022"}
          iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={<MultilineChart/>}
      >
        <Typography variant={"h5"}>Consultant Data Engineer</Typography>
        <Typography>Big Data Republic | Utrecht</Typography>
        <Typography>
          I worked as a Data Engineering consultant at BigData Republic where I specialize in MLOps and data operations
          in the cloud. My primary focus is in modernizing existing data architectures and creating new platforms
          on both AWS and Azure.
        </Typography>
        <a className={classes.buttonLink} href="https://bigdatarepublic.nl">
          <Button className={classes.buttonLink} variant={"outlined"}>
            Learn More
          </Button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          date={"2020 - 2022"}
          iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={<MultilineChart/>}
      >
        <Typography variant={"h5"}>Data Engineer</Typography>
        <Typography>KLM Royal Dutch Airlines | Schiphol</Typography>
        <Typography>
          Through BigData Republic I consulted the KLM Engineering & Maintenance division on their predictive maintenance
          products. I assist and coach their team in creating new value through the use of big data technologies such
          as Spark, Hadoop and Dask. Furthermore, I consult their teams on new innovation in the marketplace.
        </Typography>
        <a className={classes.buttonLink} href="https://www.afiklmem.com/en/solutions/about-prognos">
          <Button className={classes.buttonLink} variant={"outlined"}>
            Learn More
          </Button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date={"2018 - 2019"}
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<MultilineChart/>}
      >
        <Typography variant={"h5"}>Co-Lead Data Science</Typography>
        <Typography>theFactor.e | Groningen</Typography>
        <Typography>
          Cooperatively headed up the Data Science division of theFactor.e, where I focused on modernizing the
          data platforms of our customers. Also created the Data Science Sprint to help businesses find the hidden
          insights in their data and translate them to practical use-cases.
          Developed solutions include Candidate Matching, NLP, Chatbots and Voice.
        </Typography>
        <a className={classes.buttonLink} href="https://tfe.nl/">
          <Button className={classes.buttonLink} variant={"outlined"}>
            Learn More (NL)
          </Button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date={"2017 - present"}
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<AssistantPhoto/>}
      >
        <Typography variant={"h5"}>Co-founder / Technical Lead</Typography>
        <Typography>Stichting Ik Ben Sofie | Utrecht</Typography>
        <Typography>
          I co-founded the I am Sofie foundation. Our goal is to reduce the amount of lonely elderly in the Netherlands
          by allowing younger volunteers to visit people in their neighbourhoods. By introducing AI and technologies
          into the process, we aim to reduce the clutter and delays currently present in applying to volunteer
        </Typography>
        <a className={classes.buttonLink} href="https://ikbensofie.nl/">
          <Button className={classes.buttonLink} variant={"outlined"}>
            Learn More (NL)
          </Button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date={"2017 - 2019"}
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<DesktopMac/>}
      >
        <Typography variant={"h5"}>Innovation Consultant</Typography>
        <Typography>theFactor.e | Groningen</Typography>
        <Typography>
          I assist our customers in making sense of new innovations such as Blockchain, AI
          & Cloud. While I am a nerd at heart, I also know how to translate these technical innovations to practical
          applications to give our customers a competitive edge in their industry.
        </Typography>
        <a className={classes.buttonLink} href="https://tfe.nl/">
          <Button className={classes.buttonLink} variant={"outlined"}>
            Learn More (NL)
          </Button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date={"2017"}
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<School/>}
      >
        <Typography variant={"h5"}>BSc Communication & Multimedia Design</Typography>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><Stars fill={"#777777"}/><p
          style={{margin: 0, marginLeft: 6, fontFamily: '"Roboto", sans-serif'}}>Cum Laude</p></div>
        <Typography>NHL University of Applied Science | Leeuwarden</Typography>
        <Typography>
          Graduated with honors from my Bachelors study Communication & Multimedia Design (CMD) in Leeuwarden with a
          focus on The Next Web. During my studies I worked in different SCRUM-teams to develop back-ends for
          websites and apps, but also learned much about UX and Front-End technologies.
        </Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2016 - 2017"
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<Search/>}
      >
        <Typography variant={"h5"}>Intern</Typography>
        <Typography>theFactor.e | Groningen</Typography>
        <Typography>
          I spent the last year of my studies as a research intern at theFactor.e where I completed two different
          research projects.
        </Typography>
        <Typography>1. An investigation into automated container orchestration tooling, including multi-tenancy and
          multi-cloud support</Typography>
        <Typography>2. Researched monitoring cloud platforms and relaying insights to developers & business
          stakeholders</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2016 - 2017 (7 mos)"
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<Straighten/>}
      >
        <Typography variant={"h5"}>Software Architect</Typography>
        <Typography>Vertimart Information Systems | Amsterdam</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2015 - 2017"
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<DesktopMac/>}
      >
        <Typography variant={"h5"}>Software Developer</Typography>
        <Typography>NHL University of Applied Science | Leeuwarden</Typography>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default withStyles(styles)(Experience)