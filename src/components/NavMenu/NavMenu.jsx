import { connect } from 'react-redux';
import { toggleVisible } from '../../redux/navMenu/actions';
import Navigation from './Navigation';
import useStyles from './NavStyles';

const NavMenu = ({ visible, toggleVisible }) => {
  const s = useStyles();

  const handleNavMenu = () => toggleVisible(!visible);

  return (
    <>
      {visible && (
        <div className={s.backdrop}>
          <div className={s.NavMenu}>
            {visible && <Navigation onToggleVisible={handleNavMenu} />}
          </div>
        </div>
      )}
      <button
        className={visible ? s.activeNavMenuButton : s.navMenuButton}
        type="button"
        onClick={handleNavMenu}
      >
        {visible ? 'Close' : 'Menu'}
      </button>
    </>
  );
};

const mapState = state => ({
  visible: state.navMenu.visible,
});

const mapDispatch = { toggleVisible };

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
