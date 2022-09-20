import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
import classes from './Options.module.scss';
import { OptionBox } from '../MainBodyItem/styled-box';

const Options = (props) => {
  return (
    <OptionBox bColor={props.bColor} className={classes.options}>
      <div className={classes.options__edit}>
        <EditIcon fontSize="large" />
      </div>
      <div className={classes.options__delete}>
        <DeleteIcon fontSize="large" />
      </div>
      <div className={classes.options__pin}>
        <PushPinIcon fontSize="large" />
      </div>
    </OptionBox>
  );
};
export default Options;
