import { useRoutes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import LazyWrapper from "@/components/LazyWrapper";
import { lazy } from "react";

const Home = LazyWrapper(lazy(() => import("@/pages/home")));
const NotFound = LazyWrapper(lazy(() => import("@/pages/notfound")));

const routes = [
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default function Routes(){
  return useRoutes(routes);
}
