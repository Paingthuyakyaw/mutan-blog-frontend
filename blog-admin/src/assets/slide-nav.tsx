import { IconBook, IconLayoutGridFilled, IconUser } from "@tabler/icons-react";

export const navLink = [
  {
    id: 1,
    path: "/admin",
    name: "Dashboard",
    icon: <IconLayoutGridFilled />,
  },
  {
    id: 2,
    path: "/admin/profile",
    name: "Profile",
    icon: <IconUser />,
  },
  {
    id: 3,
    path: "/admin/posts",
    name: "Posts",
    icon: <IconBook />,
  },
];
