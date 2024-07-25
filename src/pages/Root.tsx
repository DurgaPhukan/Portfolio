import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/navigation/Footer";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";

function RootLayout() {
  // const token = useLoaderData();
  // const submit = useSubmit();

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   if (token === "EXPIRED") {
  //     submit(null, { action: "/logout", method: "post" });
  //     return;
  //   }
  //   const tokenDuration = getTokenDuration();
  //   console.log(tokenDuration);

  //   setTimeout(() => {
  //     submit(null, { action: "/logout", method: "post" });
  //   }, tokenDuration);
  // }, [token, submit]);

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="mt-4 ">
        <Footer />
      </div>
    </div>
  );
}
export default RootLayout;
