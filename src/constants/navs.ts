import { SubNavProps } from 'pages/Navbar/NavbuttonWIthSubnav'

export type NavButton = {
  title: string
  path: string
  subNav: SubNavProps[]
}

export const navs: NavButton[] = [
  {
    title: 'ABOUT US',
    path: '/aboutus/overview',
    subNav: [
      {
        title: 'Our Family',
        path: '/aboutus/our-family',
      },
      {
        title: 'Vision & Mission',
        path: '/aboutus/vision-and-mission',
      },
      {
        title: 'Our Structure',
        path: '/aboutus/our-structure',
      },
      {
        title: 'Management Committee',
        path: '/aboutus/management-committee',
      },
    ],
  },
  {
    title: 'SERVICES',
    path: '/computer-centres',
    subNav: [
      {
        title: 'Computer Centres',
        path: '/computer-centres',
      },
      {
        title: 'Training Workshops',
        path: '/training-workshops',
      },
      {
        title: 'External Training Workshops',
        path: '/external-workshops',
      },
      {
        title: 'Student Development Platform (SDP)',
        path: '/sdp',
      },
    ],
  },
  {
    title: 'EVENTS',
    path: '/events',
    subNav: [
      {
        title: 'Cyberia',
        path: '/events/cyberia',
      },
      {
        title: 'CREATION',
        path: '/events/creation',
      },
      {
        title: 'CharITeach',
        path: '/events/chariteach',
      },
    ],
  },
  {
    title: 'FAQ',
    path: '/faq',
    subNav: [],
  },
  {
    title: 'FEEDBACK',
    path: '/feedback',
    subNav: [],
  },
  {
    title: 'CONTACT US',
    path: '/contact',
    subNav: [],
  },
]
