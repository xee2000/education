import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Program from "./components/Program";
import Education from "./components/Education";
import Sub01 from "./components/sub/Sub01";

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
    path: "/Sub01",
    element: <Sub01 />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);