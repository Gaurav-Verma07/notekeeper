import { AddCircle } from '@mui/icons-material';
import classes from './Header.module.scss';
const Header = () => {
  return (
    <header className={classes.head}>
      <div className={classes.head__logo}>NoteKeeper</div>
      <div className={classes.head__addNote}>
        <AddCircle fontSize="large"  />
        Add Note
      </div>
    </header>
  );
};
export default Header;
