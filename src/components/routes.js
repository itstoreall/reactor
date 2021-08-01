import { lazy } from 'react';

// const HomeView = lazy(() =>
//   import('../views/HomeView' /*webpackChunkName: 'Home'*/),
// );
// const RegisterView = lazy(() =>
//   import('../views/RegisterView' /*webpackChunkName: 'Register'*/),
// );
const LoginView = lazy(() =>
  import('../views/LoginView' /*webpackChunkName: 'Login'*/),
);
const ResumeView = lazy(() =>
  import('../views/ResumeView' /*webpackChunkName: 'Resume'*/),
);
const PortfolioView = lazy(() =>
  import('../views/PortfolioView' /*webpackChunkName: 'Portfolio'*/),
);
const AdminView = lazy(() =>
  import('../views/AdminView' /*webpackChunkName: 'Admin'*/),
);
// const ContactsView = lazy(() =>
//   import('../views/ContactView' /*webpackChunkName: 'Contacts'*/),
// );

export const routes = [
  // {
  //   path: '/',
  //   label: 'Home',
  //   component: HomeView,
  //   exact: true,
  //   showInMenu: false,
  // },
  // {
  //   path: '/register',
  //   label: 'Register',
  //   component: RegisterView,
  //   showInMenu: false,
  //   needsAuthorization: true,
  // },
  {
    path: '/login',
    label: 'Login',
    component: LoginView,
    showInMenu: false,
    needsAuthorization: false,
  },
  {
    path: '/resume',
    label: 'Resume',
    component: ResumeView,
    showInMenu: true,
    needsAuthorization: false,
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
    component: PortfolioView,
    showInMenu: true,
    needsAuthorization: false,
  },
  {
    path: '/admin',
    label: 'Admin',
    component: AdminView,
    showInMenu: true,
    needsAuthorization: true,
  },
  // {
  //   path: '/contacts',
  //   label: 'Contacts',
  //   component: ContactsView,
  //   showInMenu: false,
  // },
];
