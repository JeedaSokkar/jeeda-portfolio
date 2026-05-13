import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <>
      <CssBaseline />

      <RouterProvider router={router} />
    </>
  );
}
