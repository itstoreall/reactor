import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunckName: 'Home'*/),
);
const ContactsView = lazy(() =>
  import('../views/ContactsView' /*webpackChunckName: 'Contacts'*/),
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
    path: '/contacts',
    label: 'Contacts',
    component: ContactsView,
    showInMenu: true,
  },
];
