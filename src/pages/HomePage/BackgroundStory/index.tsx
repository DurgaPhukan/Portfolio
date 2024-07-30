import { motion } from "framer-motion";
import { IDetailSections } from "..";
import { StyledH3 } from "../../../components/Text/styles";
import MotionDiv from "../../../components/MotionDiv";

interface studyDataInterface {
  course: string;
  year: string;
  percentage: string;
}

export const studyData: studyDataInterface[] = [
  {
    course: "Bachelor of Engineering in Electronics and Telecommunication",
    year: "2017-2021",
    percentage: "79.36%",
  },
  {
    course: "Higher Secondary (12th)",
    year: "2016",
    percentage: "80%",
  },
  {
    course: "Matriculation Examination",
    year: "2014",
    percentage: "86.5%",
  },
];

export const Study = () => {
  return (
    <div>
      {studyData.map((data) => (
        <div style={{ margin: "1.5rem 0px" }}>
          <StyledH3>
            {data.course}{" "}
            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "#aaaaaa",
                marginLeft: "1.5rem",
                textAlign: "right",
              }}
            >
              {data.year}
            </span>
          </StyledH3>
          <p style={{ margin: ".5rem 0px", padding: "0px", color: "#adb5bd" }}>
            Percentage :{data.percentage}
          </p>
        </div>
      ))}
    </div>
  );
};

export const AboutYourself = () => {
  return (
    <div>
      <p
        style={{
          wordSpacing: ".2rem",
          color: "#adb5bd",
          fontSize: "1.1rem",
          wordBreak: "inherit",
          lineHeight: "25px",
          fontWeight: 300,
        }}
      >
        Back in 2020, I decided to try my hand at creating webpages and tumbled
        head first into the rabbit hole of coding and web development.
        Fast-forward to today, and I’ve had the privilege of building software
        for a start-up, a huge corporation. My main focus these days is building
        accessible user interfaces for our customers at Clinify Health. I most
        enjoy building software in the sweet spot where design and engineering
        meet — things that look good but are also built well under the hood. In
        my free time, I've also released an online video course that covers
        everything you need to know to build a web app with the Spotify API.
        When I’m not at the computer, I’m usually hiking, reading, hanging out
        with my friends and my doggo, or walking around the natural places .
      </p>
    </div>
  );
};

export const Activities = () => {
  return (
    <div style={{ width: "400px" }}>
      <h3>These are my activities</h3>
      <ul>
        <li>blah</li>
        <li>bleh</li>
        <li>blah</li>
      </ul>
    </div>
  );
};

const BackgroundStory = ({
  detailsSections,
}: {
  detailsSections: IDetailSections[];
}) => {
  return (
    <div
      style={{
        color: "#ffffff",
        maxWidth: "550px",
      }}
    >
      {detailsSections.map(
        (detail) =>
          detail.active && (
            <MotionDiv direction="right">{detail.component}</MotionDiv>
          )
      )}
    </div>
  );
};

export default BackgroundStory;
