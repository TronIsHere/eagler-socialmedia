import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import LoginPage from "./pages/auth/login";
import App from "./App";
import RegisterPage from "./pages/auth/register";
import NotFoundPage from "./pages/404";
import ProfilePage from "./pages/home/profile";
import TimelinePage from "./pages/home/timeline";
import { ExplorePage } from "./pages/home/explore/explore";
import { NotificationPage } from "./pages/home/notification";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "profile",
        element: <ProfilePage></ProfilePage>,
        errorElement: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "home",
        element: <TimelinePage></TimelinePage>,
        errorElement: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "explore",
        element: <ExplorePage></ExplorePage>,
        errorElement: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "notifications",
        element: <NotificationPage></NotificationPage>,
        errorElement: <NotFoundPage></NotFoundPage>,
      },
    ],
  },

  {
    path: "/auth/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/auth/register",
    element: <RegisterPage></RegisterPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

export default router;
