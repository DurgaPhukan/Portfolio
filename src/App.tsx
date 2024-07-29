import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import About from "./pages/About/About";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";

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
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "activities",
        element: <Activities />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
