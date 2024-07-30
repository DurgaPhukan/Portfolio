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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde soluta
          quisquam perferendis fugit ullam facere corporis aliquid ab assumenda
          quibusdam voluptates tempore nihil minima, autem quasi necessitatibus
          rem odit neque?
        </p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            ducimus quidem amet in esse, maxime placeat cumque iure beatae
            laudantium pariatur molestiae, dolorum sapiente autem natus modi
            quod deleniti vero!
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero rem
          consequuntur error accusantium enim at obcaecati libero ab nam,
          mollitia voluptatem dolor maxime asperiores recusandae tempora ipsum
          quo sit beatae!
        </p>
      </MainWrapper>
    </div>
  );
}
export default HomePage;
