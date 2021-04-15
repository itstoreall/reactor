import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const ContactsView = lazy(() =>
  import('../views/ContactsView' /*webpackChunkName: 'Contacts'*/),
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
