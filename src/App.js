import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
// import HomeView from './views/HomeView';

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Content />
      </main>
    </>
  );
}
