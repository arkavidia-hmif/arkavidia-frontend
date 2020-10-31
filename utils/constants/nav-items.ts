const NavItems = [
  {
    text: 'HOME',
    path: '/',
  },
  {
    text: 'ABOUT US',
    path: '/about',
  },
  {
    text: 'COMPETITIONS',
    path: '/competition',
    submenu: [
      {
        text: 'COMPETITIVE PROGRAMMING',
        path: '/competition/competitive-programming'
      },
      {
        text: 'CAPTURE THE FLAG',
        path: '/competition/capture-the-flag'
      },
      {
        text: 'GAMEDEV',
        path: '/competition/gamedev'
      },
      {
        text: 'DATAVIDIA',
        path: '/competition/datavidia'
      },
      {
        text: 'ARKALOGICA',
        path: '/competition/arkalogica'
      }
    ]
  },
  {
    text: 'PRE-EVENTS',
    path: '/preevent',
    submenu: [
      {
        text: 'TECHNOCAMP',
        path: '/preevent/technocamp'
      },
      {
        text: 'ARKAVIDIA GOES TO SCHOOL',
        path: '/preevent/arkavidia-goes-to-school'
      },
      {
        text: 'ARKAVIDIA ACADEMY',
        path: '/preevent/arkavidia-academy'
      },
      {
        text: 'ARKAVIDIA ON AIR',
        path: '/preevent/arkavidia-on-air'
      }
    ]
  },
  {
    text: 'EVENTS',
    path: '/technocamp',
    submenu: [
      {
        text: 'IT FESTIVAL',
        path: '/event/it-festival'
      },
      {
        text: 'ARKAVIDIA TALKS',
        path: '/event/arkavidia-talks'
      }
    ]
  },
];

export default NavItems;