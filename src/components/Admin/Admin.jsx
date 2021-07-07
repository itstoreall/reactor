import { useStyles, muiStyles } from './AdminStyles';
import TextField from '@material-ui/core/TextField';

// const { log } = console;

const Admin = () => {
  const s = useStyles();
  const mui = muiStyles();

  return (
    <div className={s.Admin}>
      <h2>Portfolio</h2>
      <form className={mui.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
      </form>
    </div>
  );
};

export default Admin;
