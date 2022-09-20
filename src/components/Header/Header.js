import { AddCircle } from '@mui/icons-material';
import { useState } from 'react';
import FormBox from '../FormBox/FormBox';
import classes from './Header.module.scss';
const Header = (props) => {
  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <header className={classes.head}>
      {open && <FormBox closeHandler={closeHandler} open={open}  type= {"NEWNOTE"}/>}
      <div className={classes.head__logo}>NoteKeeper</div>
      <div
        className={classes.head__addNote}
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddCircle fontSize="large" />
        Add Note
      </div>
    </header>
  );
};
export default Header;
