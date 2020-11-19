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
    haveChild: false
  },
  {
    title: "EVENTS",
    route: "/dashboard/events",
    haveChild: false
  },
  {
    title: "ARKAVTALKS",
    route: "/dashboard/arkav-talks",
    haveChild: false
  },
];

export default DashboardItems;
