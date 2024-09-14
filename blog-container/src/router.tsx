import Admin from "admin/Admin";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

const Router = () => {
  const [router, setRouter] =
    useState<ReturnType<typeof createBrowserRouter>>();

  useEffect(() => {
    const mergedRoutes = mergeFunction();
    const router = createBrowserRouter(mergedRoutes);
    setRouter(router);
  }, []);

  if (!router) return null;

  return <RouterProvider router={router} />;
};

export default Router;

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
      {
        path: "/posts/:id",
        lazy: async () => ({
          Component: (await import("./page/posts/components/post-detail"))
            .default,
        }),
      },
    ],
  },
];

// Merge function to combine container and remote routes
const mergeFunction = (): RouteObject[] => {
  return [...containerRouter, ...Admin()];
};
