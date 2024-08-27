// import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../../lib/auth";

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: "/auth/login",
      lazy: async () => {
        const { LoginRoute } = await import("./auth/login");
        return { Component: LoginRoute };
      },
    },
    {
      path: "/auth/register",
      lazy: async () => {
        const { RegisterRoute } = await import("./auth/register");
        return { Component: RegisterRoute };
      },
    },
    {
      path: "/app",
      element: <ProtectedRoute>hi</ProtectedRoute>,
      children: [
        {
          path: "first",
          // lazy:
          element: <div>hii</div>,
        },
      ],
    },
  ]);
};
