// const token = getAuthToken();
// console.log("Token Home", token);

import { ReactNode, useState } from "react";
import Card from "../../components/Card";
import MainWrapper from "../../components/MainWrapper";
import SocialLinks from "../../components/SocialLinks";
import { socialLinks } from "../../components/SocialLinks/links";
import BackgroundStory, {
  AboutYourself,
  Activities,
  Study,
} from "./BackgroundStory";
import ProfileDetails from "./ProfileDetails";
import { Grid } from "@mui/material";
import { ParallaxText } from "../../components/ParallalText";
import MotionDiv from "../../components/MotionDiv";

export interface IDetailSections {
  id: string;
  active: boolean;
  title: string;
  component: JSX.Element;
  color: string;
}
const detailsSectionsConst = [
  {
    id: "studies",
    active: true,
    title: "Studies",
    component: <Study />,
    color: "#adb5bd",
  },
  {
    id: "about",
    active: false,
    title: "About",
    component: <AboutYourself />,
    color: "#adb5bd",
  },
  {
    id: "activities",
    active: false,
    title: "Activities",
    component: <Activities />,
    color: "#adb5bd",
  },
];

function HomePage() {
  const [detailsState, setDetailState] = useState(detailsSectionsConst);

  const activeHandler = (id: string) => {
    console.log("working vutton", id);
    const details = detailsState;
    details.map((detail) => {
      if (detail.id === id) {
        detail.active = true;
      } else {
        detail.active = false;
      }
      return detail;
    });
    setDetailState((prevState) => {
      const newData = prevState.map((detail) => {
        if (detail.id === id) {
          detail.active = true;
        } else {
          detail.active = false;
        }
        return detail;
      });
      return newData;
    });
    console.log("))))))", detailsState);
  };
  return (
    <div>
      <MainWrapper>
        <Grid container spacing={3}>
          <Grid item md={12} lg={6}>
            <ProfileDetails
              activeHandler={activeHandler}
              detailsSections={detailsState}
            />
            <SocialLinks socialLinks={socialLinks} />
          </Grid>
          <Grid item md={12} lg={6}>
            <BackgroundStory detailsSections={detailsState} />
          </Grid>
        </Grid>
      </MainWrapper>
      <div style={{ margin: "5.5rem 0px" }}>
        <ParallaxText baseVelocity={5}>
          FrontEnd | Backend | Analytics |
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>React | Node | Docker |</ParallaxText>
      </div>
      <MainWrapper>
        <div>
          I have a passion for watching movies, as I enjoy exploring different
          genres and storytelling techniques. I also find great satisfaction in
          cycling, which helps me stay active and appreciate the outdoors.
          Socializing with friends is another key interest of mine, as it allows
          me to build strong connections and enjoy shared experiences.
          Additionally, spending quality time with my family is essential,
          providing a foundation of support and joy in my life. These activities
          enrich my life and contribute to a well-rounded perspective.
        </div>
        <MotionDiv xDirection="right">
          <p>
            I am a hardworking, passionate, and goal-oriented individual with a
            strong aptitude for teamwork and management. My dedication to
            achieving excellence is matched by my ability to adapt and learn
            quickly in dynamic environments. I am detail-oriented and possess
            strong problem-solving skills, allowing me to navigate challenges
            efficiently. My positive attitude and strong communication skills
            enable me to work collaboratively with others, fostering a
            productive and supportive team atmosphere. With a commitment to
            continuous improvement and a proactive approach, I consistently
            strive to exceed expectations and contribute meaningfully to every
            project I undertake.
          </p>
        </MotionDiv>
        <MotionDiv>
          <p>
            My vision is to become a skilled software developer, leveraging
            technology to create innovative solutions that make a positive
            impact. I aspire to use my skills to not only advance in my career
            but also contribute meaningfully to society. I am passionate about
            using technology to address real-world challenges and improve the
            quality of life for others. Within the next few years, I aim to work
            on projects that promote social good and contribute to humanity. My
            goal is to be part of initiatives that drive progress and create a
            better future for all.
          </p>
        </MotionDiv>
      </MainWrapper>
    </div>
  );
}
export default HomePage;
