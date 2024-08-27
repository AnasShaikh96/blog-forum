// import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

export const createRouter = () => {
 return createBrowserRouter([
    {
      path: "/auth/login",
      lazy: async () => {
        const { LoginRoute } = await import("./auth/login");
        return { Component: LoginRoute };
      },
    },
  ]);
};
