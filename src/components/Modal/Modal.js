import * as React from 'react';
import Modal from '@mui/material/Modal';
import classes from './Modal.module.scss';

const BasicModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => {
          handleClose();
          props.close();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        {props.children}
      </Modal>
    </div>
  );
};

export default BasicModal;
