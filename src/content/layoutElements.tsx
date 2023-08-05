import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Wallet", href: "/wallet", icon: UsersIcon },
];
export const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
export const userNavigation = [
  { name: "BscScan", href: "#" },
  { name: "Disconnect", href: "#" },
];

export const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: "./socials/facebook.svg",
  },
  {
    name: "GitHub",
    href: "#",
    icon: "./socials/github.svg",
  },
  {
    name: "Instagram",
    href: "#",
    icon: "./socials/instagram.svg",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: "./socials/linkedin.svg",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "./socials/twitter.svg",
  },
];
