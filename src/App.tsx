import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: checkAuthLoader,
      },
      {
        path: "about",
        element: <About />,
        // action: loginAction,
      },
      // {
      //   path: "signup",
      //   element: <SignUp />,
      //   action: signupAction,
      //   children: [],
      // },
      // {
      //   path: "men",
      //   element: <MenLayoutPage />,
      //   children: [
      //     // {
      //     //   path:':productid',
      //     //   element: <ProductLayout/>,
      //     //   children:[],
      //     // },
      //   ],
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
