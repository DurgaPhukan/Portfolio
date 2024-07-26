import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import useSWR, { SWRConfig } from "swr";
import { getAuthToken } from "../../utils/auth";

// const token = getAuthToken();
// console.log("Token Home", token);

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
    <div className="h-full text-gray-600">
      <div className="mx-4">{/* <Carousal /> */}</div>
      <h2>This is home</h2>
    </div>
  );
}
export default HomePage;
