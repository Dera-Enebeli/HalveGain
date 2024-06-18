import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./pages2/SignIn";
import Register from "./pages/Register";
// import DashboardHome from "./pages2/DashboardHome";

export default function App() {
  function PageLayout() {
    return (
      <div className="overflow-hidden">
        <div className="md:px-[2rem]">
          <Header />
        </div>
        <Outlet />
        <Footer />
      </div>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        // {
        //   path: "/dashboardHome",
        //   element: <DashboardHome />,
        // },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={pageRoutes}></RouterProvider>
    </div>
  );
}
