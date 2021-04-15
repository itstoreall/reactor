import HomeView from './views/HomeView';

export default function App() {
  return (
    <>
      <header>
        <a className="logo" href="/">
          Reactor
        </a>
      </header>
      <nav>
        <a className="nav" href="/">
          Nav
        </a>
      </nav>
      <main>
        <HomeView />
      </main>
    </>
  );
}
