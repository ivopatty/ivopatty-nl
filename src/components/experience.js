import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import MultilineChart from "@mui/icons-material/MultilineChart";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stars from "@mui/icons-material/Stars"
import School from "@mui/icons-material/School";
import Straighten from "@mui/icons-material/Straighten"
import Search from "@mui/icons-material/Search";
import DesktopMac from '@mui/icons-material/DesktopMac'
import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.css"
import { makeStyles } from 'tss-react/mui';
import AssistantPhoto from '@mui/icons-material/AssistantPhoto';
import ParticleEmitter from "./visuals/particleEmitter";

const useStyles = makeStyles()((theme) => ({
  work: {
    backgroundColor: 'transparent',
    position: 'relative',
    padding: theme.spacing(4, 0),
  },
  buttonLink: {
    textDecoration: 'none',
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.1)',
      borderColor: theme.palette.primary.light,
      boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
      transform: 'translateX(4px)',
    },
    "@media (max-width: 1200px)": {
      marginLeft: theme.spacing(1)
    }
  },
  company: {
    color: '#64FFDA',
    fontWeight: 500,
    fontSize: '1rem',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1.5),
  },
  description: {
    lineHeight: 1.8,
    marginTop: theme.spacing(1.5),
  }
}));

const Experience = () => {
  const { classes } = useStyles();

  const iconStyle = {
    background: 'linear-gradient(135deg, #64FFDA 0%, #00D9FF 100%)',
    color: '#0A192F',
    boxShadow: '0 0 20px rgba(100, 255, 218, 0.6)',
  };

  return (
    <div className={classes.work} id={"experience"}>
      <ParticleEmitter />
      <VerticalTimeline>
        <VerticalTimelineElement
          date={"2022 - present"}
          iconStyle={iconStyle}
          icon={<MultilineChart />}
        >
          <Typography variant={"h5"}>Lead Data Engineer</Typography>
          <Typography className={classes.company}>Qodea | Utrecht/UK/RO</Typography>
          <Typography className={classes.description}>
            I currently work as a Lead Data Engineer within Qodea. At Qodea I lead a team of 9 other Data Engineering Consultants
            who assist our clients in modernizing their data platforms and getting from data to insights. We specialize in Google Cloud
            platform implementations of data products as well as providing cutting edge Generative AI solutions.
          </Typography>
          <a className={classes.buttonLink} href="https://qodea.com">
            <Button className={classes.buttonLink} variant={"outlined"}>
              Learn More
            </Button>
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={"2020 - 2022"}
          iconStyle={iconStyle}
          icon={<MultilineChart />}
        >
          <Typography variant={"h5"}>Consultant Data Engineer</Typography>
          <Typography className={classes.company}>Big Data Republic | Utrecht</Typography>
          <Typography className={classes.description}>
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
          iconStyle={iconStyle}
          icon={<MultilineChart />}
        >
          <Typography variant={"h5"}>Data Engineer</Typography>
          <Typography className={classes.company}>KLM Royal Dutch Airlines | Schiphol</Typography>
          <Typography className={classes.description}>
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
          iconStyle={iconStyle}
          icon={<MultilineChart />}
        >
          <Typography variant={"h5"}>Co-Lead Data Science</Typography>
          <Typography className={classes.company}>theFactor.e | Groningen</Typography>
          <Typography className={classes.description}>
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
          date={"2017 - 2022"}
          iconStyle={iconStyle}
          icon={<AssistantPhoto />}
        >
          <Typography variant={"h5"}>Co-founder / Technical Lead</Typography>
          <Typography className={classes.company}>Stichting Ik Ben Sofie | Utrecht</Typography>
          <Typography className={classes.description}>
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
          iconStyle={iconStyle}
          icon={<DesktopMac />}
        >
          <Typography variant={"h5"}>Innovation Consultant</Typography>
          <Typography className={classes.company}>theFactor.e | Groningen</Typography>
          <Typography className={classes.description}>
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
          iconStyle={iconStyle}
          icon={<School />}
        >
          <Typography variant={"h5"}>BSc Communication & Multimedia Design</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 4 }}><Stars fill={"#64FFDA"} /><p
            style={{ margin: 0, marginLeft: 6, fontFamily: '"Roboto", sans-serif', color: '#64FFDA', fontWeight: 500 }}>Cum Laude</p></div>
          <Typography className={classes.company}>NHL University of Applied Science | Leeuwarden</Typography>
          <Typography className={classes.description}>
            Graduated with honors from my Bachelors study Communication & Multimedia Design (CMD) in Leeuwarden with a
            focus on The Next Web. During my studies I worked in different SCRUM-teams to develop back-ends for
            websites and apps, but also learned much about UX and Front-End technologies.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2016 - 2017"
          iconStyle={iconStyle}
          icon={<Search />}
        >
          <Typography variant={"h5"}>Intern</Typography>
          <Typography className={classes.company}>theFactor.e | Groningen</Typography>
          <Typography className={classes.description}>
            I spent the last year of my studies as a research intern at theFactor.e where I completed two different
            research projects.
          </Typography>
          <Typography className={classes.description}>1. An investigation into automated container orchestration tooling, including multi-tenancy and
            multi-cloud support</Typography>
          <Typography className={classes.description}>2. Researched monitoring cloud platforms and relaying insights to developers & business
            stakeholders</Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2016 - 2017 (7 mos)"
          iconStyle={iconStyle}
          icon={<Straighten />}
        >
          <Typography variant={"h5"}>Software Architect</Typography>
          <Typography className={classes.company}>Vertimart Information Systems | Amsterdam</Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2015 - 2017"
          iconStyle={iconStyle}
          icon={<DesktopMac />}
        >
          <Typography variant={"h5"}>Software Developer</Typography>
          <Typography className={classes.company}>NHL University of Applied Science | Leeuwarden</Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience