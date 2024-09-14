import { IconBook, IconLayoutGridFilled, IconUser } from "@tabler/icons-react";

export const navLink = [
  {
    id: 1,
    path: "/",
    name: "Dashboard",
    icon: <IconLayoutGridFilled />,
  },
  {
    id: 2,
    path: "/profile",
    name: "Profile",
    icon: <IconUser />,
  },
  {
    id: 3,
    path: "/posts",
    name: "Posts",
    icon: <IconBook />,
  },
];
