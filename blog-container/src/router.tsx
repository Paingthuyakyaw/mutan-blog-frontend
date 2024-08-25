import Admin from "admin/Admin";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

console.log(Admin);

const Router = () => {
  const [router, setRouter] =
    useState<ReturnType<typeof createBrowserRouter>>();

  useEffect(() => {
    const mergedRoutes = mergeFunction();
    const router = createBrowserRouter(mergedRoutes);
    setRouter(router);
  }, []);

  // Render `null` if `router` is not set yet to avoid issues
  if (!router) return null;

  return <RouterProvider router={router} />;
};

export default Router;

// Define the route array with the correct type
const containerRouter: RouteObject[] = [
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("./layout/app-layout")).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./page/home")).default,
        }),
      },
      // Add more routes as needed
    ],
  },
];

// Merge function to combine container and remote routes
const mergeFunction = (): RouteObject[] => {
  return [...containerRouter, ...Admin()];
};
