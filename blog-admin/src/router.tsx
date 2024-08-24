import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/admin",
      lazy: async () => ({
        Component: (await import("./layout/app-layout")).default,
      }),
      children: [
        {
          index: true,
          lazy: async () => ({
            Component: (await import("./page/dashboard")).default,
          }),
        },
        {
          path: "/posts",
          lazy: async () => ({
            Component: (await import("./page/posts")).default,
          }),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
