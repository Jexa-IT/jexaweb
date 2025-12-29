import { useRoutes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import LazyWrapper from "@/components/LazyWrapper";
import { lazy } from "react";

const Home = LazyWrapper(lazy(() => import("@/pages/home")));
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
];
export default function Routes(){
  return useRoutes(routes);
}