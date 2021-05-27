import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const ResumeView = lazy(() =>
  import('../views/ResumeView' /*webpackChunkName: 'Resume'*/),
);
const PortfolioView = lazy(() =>
  import('../views/PortfolioView' /*webpackChunkName: 'Portfolio'*/),
);
const ContactsView = lazy(() =>
  import('../views/ContactView' /*webpackChunkName: 'Contacts'*/),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomeView,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/resume',
    label: 'Resume',
    component: ResumeView,
    showInMenu: true,
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
    component: PortfolioView,
    showInMenu: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: ContactsView,
    showInMenu: true,
  },
];
