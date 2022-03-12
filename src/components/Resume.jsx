import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import NavBar from "./NavBar";
import CardComponent from "./CardComponent";
import theme from "../assets/theme";
import profile from "../assets/images/profileIcon.jpg";
import ust from "../assets/images/UST_Seal.png";
import hsam from "../assets/images/HSAM.jpg";
import veer from "../assets/images/veer.jpg";
import HeadingComponent from "./HeadingComponent";
import InfoComponent from "./InfoComponent";
import AffiliationComponent from "./AffiliationComponent";
import AchievementComponent from "./AchievementComponent";
import SeminarComponent from "./SeminarComponent";

const Resume = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 20, mb: 20 }}>
        <Grid container spacing={8}>
          <Grid item lg={8}>
            <Typography
              color="secondary"
              variant="h2"
              component="h2"
              gutterBottom
            >
              Joshua Sapalaran
            </Typography>
            <Typography
              color="secondary"
              variant="h4"
              component="h4"
              sx={{ fontWeight: 700 }}
            >
              Full-stack Developer
            </Typography>
            <Typography
              color="secondary"
              variant="h5"
              component="p"
              sx={{
                mt: "48px",
                fontStyle: "italic",
                fontWeight: 100,
                maxWidth: "710px",
              }}
              gutterBottom
            >
              “A life-long learner and pursuer of growth who is always seeking
              for adventure and challenges that will help me develop my
              technical and non-technical skills, and, also, my personality.
              Aptitude and interpersonal skills were tested and honed by
              creating major projects, and by joining organizations and
              hackathons.”
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Avatar
              alt="Joshua Sapalaran"
              src={profile}
              sx={{ width: 250, height: 250, marginLeft: "auto" }}
            />
          </Grid>
        </Grid>

        <HeadingComponent
          heading="Education"
          sx={{ mt: "172px", mb: "72px" }}
        />

        <Grid container spacing={10} sx={{ mb: "172px" }}>
          <Grid item container spacing={10}>
            <Grid item lg={4}>
              <CardComponent image={ust} />
            </Grid>
            <Grid item lg={8}>
              <InfoComponent
                work="University of Santo Tomas"
                date="2018 - 2022"
                position="Bachelor of Science in Information Technology"
              />
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <CardComponent image={hsam} />
          </Grid>
          <Grid item lg={8}>
            <InfoComponent
              work="Holy Spirit Academy of Malolos"
              date="2012 - 2018"
              position="Science, Technology, Engineering, and Mathematics"
            />
          </Grid>
        </Grid>

        <HeadingComponent heading="Experience" sx={{ mb: "72px" }} />

        <Grid container spacing={10} sx={{ mb: "172px" }}>
          <Grid container item spacing={10}>
            <Grid item lg={4}>
              <CardComponent image={veer} />
            </Grid>
            <Grid item lg={8}>
              <InfoComponent
                work="Veer Immersive Technologies"
                date="July 2020 - August 2020"
                position="Game Developer Intern"
              />
            </Grid>
          </Grid>
        </Grid>

        <HeadingComponent heading="Affiliation" sx={{ mb: "72px" }} />

        <Grid container spacing={5} sx={{ mb: "172px" }}>
          <AffiliationComponent
            organization="UST-SITE"
            position="VP for Socio-Cultural Marketing"
          />
          <AffiliationComponent
            organization="TomasinoWeb"
            position="Web Technologies Staff"
          />
          <AffiliationComponent
            organization="TomasinoWeb"
            position="Chief Technology Officer"
          />
          <AffiliationComponent
            organization="UST-IEEE SB"
            position="Public Relations Officer"
          />
          <AffiliationComponent
            organization="UST-IEEE SB"
            position="Vice Chairman for ICES"
          />
          <AffiliationComponent
            organization="TomasinoWeb"
            position="Asst. Chief Technology Officer"
          />
          <AffiliationComponent
            organization="TomasinoWeb"
            position="Web Technologies Staff"
          />
        </Grid>

        <HeadingComponent heading="Achievements" sx={{ mb: "72px" }} />
        <Grid container spacing={7} sx={{ mb: "172px" }}>
          <AchievementComponent
            title="Synergy 2021: Stanford IT Learning Software Solutions"
            date="March 2021"
            award="3rd Place"
          />
          <AchievementComponent
            title="NASA International Space Apps Challenge 2019"
            date="October 2019"
            award="Galactic Impact Award"
          />
          <AchievementComponent
            title="PhilAm LifeHackers 2019"
            date="December 2019"
            award="Finalist"
          />
        </Grid>

        <HeadingComponent heading="Seminars & Workshops" sx={{ mb: "72px" }} />
        <Grid container spacing={2} direction="column">
          <SeminarComponent seminar="Philippine Startup Week 2021" />
          <SeminarComponent seminar="Synergy 2021" />
          <SeminarComponent seminar="JavaScript Workshop" />
          <SeminarComponent seminar="Philippine Startup Week 2020" />
          <SeminarComponent seminar="Synergy 2018" />
          <SeminarComponent seminar="Making Sense of Machine Learning Model Predictions" />
          <SeminarComponent seminar="Big Data: Tools and Techniques" />
          <SeminarComponent seminar="Computer Science Summit 4.0" />
        </Grid>
      </Container>
      <NavBar />
    </ThemeProvider>
  );
};

export default Resume;
