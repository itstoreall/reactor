import { connect } from 'react-redux';
import Navigation from './Navigation';
import useStyles from './NavStyles';

const NavMenu = ({ navMenu, visibleNavMenu }) => {
  const s = useStyles();

  const toggleVisible = () => visibleNavMenu(navMenu);

  return (
    <div className={s.NavMenu}>
      <button className={s.navMenuButton} type="button" onClick={toggleVisible}>
        {navMenu ? 'Hide menu' : 'Show menu'}
      </button>
      {navMenu && <Navigation onToggleVisible={toggleVisible} />}
    </div>
  );
};

const mapState = state => ({
  navMenu: state.navMenu,
});

const mapDispatch = dispatch => ({
  visibleNavMenu: navMenu =>
    dispatch({
      type: 'navMenu/visible',
      payload: !navMenu,
    }),
});

export default connect(mapState, mapDispatch)(NavMenu);

/* NavMenu #1 (with local state)

 export default function NavMenu() {
  const [visible, setVisible] = useState(false);
  const s = useStyles();

  const toggleVisible = () => setVisible(prevVisible => !prevVisible);

  return (
    <div className={s.NavMenu}>
      <button className={s.navMenuButton} type="button" onClick={toggleVisible}>
        {visible ? 'Hide menu' : 'Show menu'}
      </button>
      {visible && <Navigation onToggleVisible={toggleVisible} />}
    </div>
  );
}
*/
