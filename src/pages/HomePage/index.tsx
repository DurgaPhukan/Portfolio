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
    color: "#d81159",
  },
  {
    id: "about",
    active: false,
    title: "About",
    component: <AboutYourself />,
    color: "#f7a072",
  },
  {
    id: "activities",
    active: false,
    title: "Activities",
    component: <Activities />,
    color: "#023e8a",
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
      <Card>
        <ProfileDetails
          activeHandler={activeHandler}
          detailsSections={detailsState}
        />
        <SocialLinks socialLinks={socialLinks} />
      </Card>
      <Card>
        <BackgroundStory detailsSections={detailsState} />
      </Card>
    </MainWrapper>
  );
}
export default HomePage;
