import classes from './MainBody.module.scss';
import MainBodyItem from '../MainBodyItem/MainBodyItem';
import { getRandomColor } from '../../utils/random-color';
import { useEffect, useState } from 'react';
import { getAllNotes } from '../../firebase/requests';

const MainBody = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    return async () => {
      const notes = await getAllNotes();
      setNotes(Object.entries(notes));
    };
  }, []);
  console.log(notes);

  return (
    <section className={classes.main}>
      {notes.map((note, index) => (
        <MainBodyItem key={index} id={note[0]} content={note[1]} color={getRandomColor()} />
      ))}
    </section>
  );
};
export default MainBody;
