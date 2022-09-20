import { useFormik } from 'formik';
import CancelIcon from '@mui/icons-material/Cancel';
import BasicModal from '../Modal/Modal';
import classes from './FormBox.module.scss';
import * as yup from 'yup';
import { postNote, updateNote, getOneNote } from '../../firebase/requests';
import { useEffect, useState } from 'react';

const initialValues = {
  title: '',
  tag: '',
  body: '',
};
const validationSchema = yup.object({
  title: yup.string().required(),
  tag: yup.date().required(),
  body: yup.date().min(yup.ref('checkIn')).required(),
});
const FormBox = (props) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    return async () => {
      const notes = await getOneNote(props.id);
      setNote(notes);
      formik.setFieldValue('title', notes.title);
      formik.setFieldValue('tag', notes.tag);
      formik.setFieldValue('body', notes.body);
    };
  }, [props.id]);

  console.log(note);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formik.values);
    if (props.type === 'EDIT') {
      updateNote(props.id, { ...formik.values, isPinned: false });
    } else
      postNote({
        ...formik.values,
        isPinned: false,
      });
  };
  const handleTitle = (e) => {
    formik.setFieldValue('title', e.target.value);
  };

  const handleBody = (e) => {
    formik.setFieldValue('body', e.target.value);
  };
  const handleTag = (e) => {
    formik.setFieldValue('tag', e.target.value);
  };

  return (
    <BasicModal open={props.open} close={props.closeHandler} className={classes.modal}>
      <div className={classes.main}>
        <CancelIcon onClick={props.closeHandler} className={classes.main__cancel} fontSize="large" />
        <form className={classes.main__form} onSubmit={submitHandler}>
          <p className={classes.main__form__heading}>{props.type === 'EDIT' ? 'Edit note' : 'Add new note'}</p>
          <input
            className={classes.main__form__input}
            type="text"
            placeholder="Title goes here"
            value={formik.values.title}
            onChange={handleTitle}
          />
          <input
            className={classes.main__form__input}
            type="tag"
            placeholder="TagLine goes here"
            value={formik.values.tag}
            onChange={handleTag}
          />
          <input
            className={classes.main__form__input}
            type="body"
            placeholder="Body goes here"
            value={formik.values.body}
            onChange={handleBody}
          />
          <button className={classes.main__form__button} type="submit">
            {props.type === 'EDIT' ? 'Update' : 'Add Note'}
          </button>
        </form>
      </div>
    </BasicModal>
  );
};
export default FormBox;
