import NoteContext from './note-context';
import { useReducer } from 'react';
import { getAllNotes } from '../firebase/requests';

const defaultNoteState = {
  open: false,
  notes: getAllNotes(),
};

const noteReducer = (state, action) => {
  if (action.type === 'OPEN') {
    return { open: true };
  }
  if (action.type === 'CLOSE') {
    return { open: false };
  }

  return defaultNoteState;
};
//Componetn start here
const NoteProvider = (props) => {
  const [noteState, dispatchNoteAction] = useReducer(noteReducer, defaultNoteState);
  const openFormHandler = () => {
    dispatchNoteAction({ type: 'OPEN' });
  };
  const closeFormHandler = () => {
    dispatchNoteAction({ type: 'CLOSE' });
  };

  const noteContext = {
    open: noteState.open,
    openForm: openFormHandler,
    closeForm: closeFormHandler,
  };

  return <NoteContext.Provider value={noteContext}>{props.children}</NoteContext.Provider>;
};

export default NoteProvider;
