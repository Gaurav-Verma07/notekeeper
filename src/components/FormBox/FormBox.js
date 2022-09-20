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
      const note = await getOneNote(props.id);
      setNote(note);
      formik.setFieldValue('title', note.title);
      formik.setFieldValue('tag', note.tag);
      formik.setFieldValue('body', note.body);
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

    props.closeHandler();
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
            placeholder="Title "
            value={formik.values.title}
            onChange={handleTitle}
          />
          <input
            className={classes.main__form__input}
            type="tag"
            placeholder="Tag line"
            value={formik.values.tag}
            onChange={handleTag}
          />
          <textarea
            rows="5"
            cols="40"
            className={classes.main__form__input}
            type="body"
            placeholder="Body"
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
