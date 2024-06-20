import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout"; // Adjust the path accordingly
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { RouterProvider } from "react-router-dom";
import { loader as HomeLoader } from "./pages/Home";

import About, { loader as AboutLoader } from "./pages/About";
export default function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about/:id",
          element: <About />,
          loader: AboutLoader,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
