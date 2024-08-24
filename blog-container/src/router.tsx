import Admin from "admin/Admin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
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
        // {
        //   path: "/profile",
        //   element: <BlogProfile />,
        // },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
