import classes from './MainBody.module.scss';
import MainBodyItem from '../MainBodyItem/MainBodyItem';
import { getRandomColor } from '../../utils/random-color';
import { Fragment, useEffect, useState } from 'react';
import { getAllNotes } from '../../firebase/requests';
import { arrangeNotes } from '../../utils/arrange-notes';
import TurnPage from '../TurnPage/TurnPage';

const MainBody = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notes = await getAllNotes();
      setNotes(arrangeNotes(Object.entries(notes)));
      console.log('This is the note ', notes);
    };
    getNotes();
  }, []);

  return (
    <Fragment>
      <section className={classes.main}>
        {notes.map((note, index) => (
          <MainBodyItem key={index} id={note[0]} content={note[1]} color={getRandomColor()} />
        ))}
      </section>
      <TurnPage />
    </Fragment>
  );
};
export default MainBody;
