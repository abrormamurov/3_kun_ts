import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout"; // Adjust the path accordingly
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { RouterProvider } from "react-router-dom";

export default function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about/:id",
          element: <About />,
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
      {" "}
      <RouterProvider router={router} />
    </>
  );
}
