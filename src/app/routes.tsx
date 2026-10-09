import { createBrowserRouter } from "react-router"
import Layout from "../components/Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        lazy: () =>
          import("../pages/Home").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "about",
        lazy: () =>
          import("../pages/About").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "projects",
        lazy: () =>
          import("../pages/Projects").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "projects/:slug",
        lazy: () =>
          import("../pages/ProjectDetail").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "beyond",
        lazy: () =>
          import("../pages/Beyond").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "contact",
        lazy: () =>
          import("../pages/Contact").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "*",
        lazy: () =>
          import("../pages/NotFound").then((module) => ({
            Component: module.default,
          })),
      },
    ],
  },
])
