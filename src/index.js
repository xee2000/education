import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Program from "./components/Program";
import Education from "./components/Education";
import MyReport from "./components/MyReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Program />,
  },
  {
    path: "/Education",
    element: <Education />,
  },
  {
    path: "/MyReport",
    element: <MyReport />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);