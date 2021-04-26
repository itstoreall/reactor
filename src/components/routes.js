import { lazy } from 'react';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const ApplicationView = lazy(() =>
  import('../views/ApplicationView' /*webpackChunkName: 'Applications'*/),
);
// const BookList = lazy(() =>
//   import('../components/Books/BookList' /*webpackChunkName: 'BookList'*/),
// );
const MovieApp = lazy(() =>
  import('../views/MovieApp' /*webpackChunkName: 'Movies'*/),
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
  // {
  //   path: '/applications/movies/search/:movieId',
  //   label: 'Movies',
  //   component: MovieDetailsView,
  //   showInMenu: false,
  // },
  {
    path: '/applications/movies',
    label: 'Movies',
    component: MovieApp,
    showInMenu: false,
  },
  // {
  //   path: '/applications/books/authors/:bookId',
  //   label: 'Author Books',
  //   component: AuthorView,
  //   showInMenu: false,
  // },
  {
    path: '/applications/books/authors',
    label: 'Authors',
    component: AuthorView,
    // exact: true,
    showInMenu: false,
  },
  {
    path: '/applications/books/:bookId',
    label: 'Book Details',
    component: BookDetailsView,
    // exact: true,
    showInMenu: false,
  },
  {
    path: '/applications/books',
    label: 'Books',
    component: BookView,
    showInMenu: false,
  },
  {
    path: '/applications/todos',
    label: 'Todos',
    component: TodoView,
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
