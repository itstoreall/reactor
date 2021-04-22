import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const ApplicationView = lazy(() =>
  import('../views/ApplicationView' /*webpackChunkName: 'Applications'*/),
);
const TodoView = lazy(() =>
  import('../views/TodoView' /*webpackChunkName: 'Todos'*/),
);
const BookDetailsView = lazy(() =>
  import('../views/BookDetailsView' /*webpackChunkName: 'BookDetails'*/),
);
const BookView = lazy(() =>
  import('../views/BookView' /*webpackChunkName: 'Book'*/),
);
const AuthorView = lazy(() =>
  import('../views/AuthorView' /*webpackChunkName: 'Authors'*/),
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
    path: '/applications/books/:bookId',
    label: 'Book Details',
    component: BookDetailsView,
    showInMenu: false,
  },
  {
    path: '/applications/todos',
    label: 'Todos',
    component: TodoView,
  },
  {
    path: '/applications/books',
    label: 'Books',
    component: BookView,
    showInMenu: false,
  },
  {
    path: '/applications/authors',
    label: 'Authors',
    component: AuthorView,
    showInMenu: true,
  },
  {
    path: '/applications',
    label: 'Applications',
    component: ApplicationView,
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
