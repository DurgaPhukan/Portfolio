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
    <MainWrapper>
      <Grid
        container
        spacing={3}
        // style={{ padding: "0px" }}
      >
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
  );
}
export default HomePage;
