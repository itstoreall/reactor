import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Content from './components/Content';
import useStyles from './AppStyles';

export default function App() {
  const s = useStyles();

  return (
    <div className={s.App}>
      <Header />
      <Content />
      <NavMenu />
    </div>
  );
}