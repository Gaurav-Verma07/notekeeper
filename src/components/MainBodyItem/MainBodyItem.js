import PushPinIcon from '@mui/icons-material/PushPin';
import classes from './MainBodyItem.module.scss';
import { useState } from 'react';
import { Box } from './styled-box';
import Options from '../Options/Options';

const MainBodyItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const closeOptionBox = () => {
    setIsHover(false);
  };

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
        {props.content.isPinned && <PushPinIcon fontSize="large" color="primary" />}
      </div>
      {isHover && (
        <Options bColor={props.color} id={props.id} closeOptionBox={closeOptionBox} isPinned={props.content.isPinned} />
      )}
      <div className={classes.block_body}>
        <h1 className={classes.block_body_heading}>{props.content.title}</h1>
        <p className={classes.block_body_tagline}>{props.content.tag}</p>
        <p className={classes.block_body_text}> {props.content.body}</p>
      </div>
    </Box>
  );
};

export default MainBodyItem;
