const DashboardItems = [
  {
    title: "ANNOUNCEMENT",
    route: "/dashboard",
    haveChild: false
  },
  {
    title: "PROFILE",
    route: "/dashboard/profile",
    haveChild: false
  },
  {
    title: "COMPETITIONS",
    route: "/dashboard/competitions",
    haveChild: true
  },
  {
    title: "PRE-EVENTS",
    route: "/dashboard/pre-events",
    haveChild: true
  },
  // {
  //   title: "EVENTS",
  //   route: "/dashboard/events",
  //   haveChild: false
  // },
  {
    title: "ARKAVIDIA TALKS",
    route: "/dashboard/arkav-talks",
    haveChild: true
  },
];

export default DashboardItems;
