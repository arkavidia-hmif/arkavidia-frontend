import { NavItem } from "interfaces/nav-items";

const NavItems: NavItem[] = [
  {
    text: "HOME",
    path: "/",
    haveChild: false,
    protected: false,
  },
  {
    text: "ABOUT US",
    path: "/about",
    haveChild: false,
    protected: false,
  },
  {
    text: "COMPETITIONS",
    path: "/competition",
    protected: false,
    haveChild: true,
    submenu: [
      {
        text: "COMPETITIVE PROGRAMMING",
        path: "/competition/competitive-programming",
      },
      {
        text: "CAPTURE THE FLAG",
        path: "/competition/capture-the-flag",
      },
      {
        text: "ARKAV GAME JAM",
        path: "/competition/gamejam",
      },
      {
        text: "DATAVIDIA",
        path: "/competition/datavidia",
      },
      {
        text: "ARKALOGICA",
        path: "/competition/arkalogica",
      },
    ],
  },
  {
    text: "PRE-EVENTS",
    path: "/preevent",
    protected: false,
    haveChild: true,
    submenu: [
      {
        text: "TECHNOCAMP",
        path: "/preevent/technocamp",
      },
      {
        text: "ARKAVIDIA GOES TO SCHOOL",
        path: "/preevent/arkavidia-goes-to-school",
      },
      {
        text: "ARKAVIDIA ACADEMY",
        path: "/preevent/arkavidia-academy",
      },
      {
        text: "ARKAVIDIA ON AIR",
        path: "/preevent/arkavidia-on-air",
      },
    ],
  },
  {
    text: "EVENTS",
    path: "/event",
    protected: false,
    haveChild: true,
    submenu: [
      {
        text: "IT FEST",
        path: "/event/it-festival",
      },
      {
        text: "ARKAVIDIA TALKS",
        path: "/event/arkavidia-talks",
      },
    ],
  },
  {
    text: "DASHBOARD",
    path: "/dashboard",
    protected: true,
    haveChild: true
  },
];

export default NavItems;
