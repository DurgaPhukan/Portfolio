// const token = getAuthToken();
// console.log("Token Home", token);

import Card from "../../components/Card";
import MainWrapper from "../../components/MainWrapper";
import SocialLinks from "../../components/SocialLinks";
import ProfileDetails from "./ProfileDetails";

// const fetcher = async (url: string) => {
//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.json();
// };

function HomePage() {
  // const { data, error, isLoading } = useSWR(
  //   "http://192.168.29.151:5002/product",
  //   fetcher
  // );
  // console.log("Error", error);

  // if (error) return <h1>{error}</h1>;
  // if (isLoading) return <h1>Loading</h1>;
  // console.log(data);

  return (
    <MainWrapper>
      <Card>
        <ProfileDetails />
        <SocialLinks />
      </Card>
      <Card>About</Card>
    </MainWrapper>
  );
}
export default HomePage;
