import React from 'react';
import Navigation from './Navigation';
import s from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={s.pageHeader}>
      <div className={s.containerHeader}>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
