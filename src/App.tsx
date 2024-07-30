import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import RootLayout from "./pages/Root";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

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
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
