import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const SummaryView = lazy(() =>
  import('../views/SummaryView' /*webpackChunkName: 'Summary'*/),
);
const ApplicationView = lazy(() =>
  import('../views/ApplicationView' /*webpackChunkName: 'Applications'*/),
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
    path: '/summary',
    label: 'Summary',
    component: SummaryView,
    showInMenu: true,
  },
  {
    path: '/applications',
    label: 'Applications',
    component: ApplicationView,
    showInMenu: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: ContactsView,
    showInMenu: true,
  },
];
