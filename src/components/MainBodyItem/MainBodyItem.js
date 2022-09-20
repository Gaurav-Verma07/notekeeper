import PushPinIcon from '@mui/icons-material/PushPin';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import classes from './MainBodyItem.module.scss';
import { useState } from 'react';
import { Box, OptionBox } from './styled-box';
import Options from '../Options/Options';
const MainBodyItem = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      bColor={props.color}
      className={classes.block}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <div className={classes.block__pinned}>
        <PushPinIcon fontSize="large" color="primary" />
      </div>
      {isHover && <Options bColor={props.color} />}{' '}
      <div className={classes.block_body}>
        <h1 className={classes.block_body_heading}>Day One</h1>
        <p className={classes.block_body_text}> {props.text}</p>
      </div>
    </Box>
  );
};

export default MainBodyItem;
