import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const ApplicationView = lazy(() =>
  import('../views/ApplicationView' /*webpackChunkName: 'Applications'*/),
);
const BookView = lazy(() =>
  import('../views/BookView' /*webpackChunkName: 'Book'*/),
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
    path: '/applications',
    label: 'Applications',
    component: ApplicationView,
    showInMenu: true,
  },
  {
    path: '/books',
    label: 'Books',
    component: BookView,
    showInMenu: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: ContactsView,
    showInMenu: true,
  },
];