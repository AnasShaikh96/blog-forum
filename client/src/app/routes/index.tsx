// import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../../lib/auth";
import { AppRoot } from "./app/root";

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
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "first",
          element: <div>hello</div>,
          // lazy: async () => {
          //   const { Example } = await import("./app/example");
          //   return { Component: Example };
          // },
        },
      ],
    },
  ]);
};
