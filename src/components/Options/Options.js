import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
import classes from './Options.module.scss';
import { OptionBox } from '../MainBodyItem/styled-box';
import { deleteNote, updateNote } from '../../firebase/requests';
import FormBox from '../FormBox/FormBox';
import { useState } from 'react';
import clsx from 'clsx';

const Options = (props) => {
  const [edit, setEdit] = useState(false);

  const deleteNoteHandler = () => {
    deleteNote(props.id);
  };

  const notePinHandler = () => {
    updateNote(props.id, { isPinned: !props.isPinned });
  };

  const noteEditHandler = () => {
    setEdit(true);
  };

  const closeHandler = () => {
    setEdit(false);
    props.closeOptionBox();
  };

  return (
    <OptionBox bColor={props.bColor} className={classes.options}>
      {edit && <FormBox open={edit} closeHandler={closeHandler} type={'EDIT'} id={props.id} />}
      <div className={classes.options__edit} onClick={noteEditHandler}>
        <EditIcon fontSize="large" />
      </div>
      <div className={classes.options__delete}>
        <DeleteIcon fontSize="large" onClick={deleteNoteHandler} />
      </div>
      <div className={clsx(!props.isPinned ? classes.options__notpin : classes.options__pin)} onClick={notePinHandler}>
        <PushPinIcon fontSize="large" />
      </div>
    </OptionBox>
  );
};
export default Options;
