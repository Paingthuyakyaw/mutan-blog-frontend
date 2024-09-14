const Router = () => {
  const routes = [
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
          path: "/admin/posts",
          lazy: async () => ({
            Component: (await import("./page/posts")).default,
          }),
        },
      ],
    },
  ];
  return routes;
};

export default Router;
