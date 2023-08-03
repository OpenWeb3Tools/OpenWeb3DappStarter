import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
export const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
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
