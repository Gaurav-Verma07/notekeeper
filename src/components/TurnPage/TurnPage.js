import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classes from './TurnPage.module.scss';

const TurnPage = () => {
  return (
    <div className={classes.main}>
      <ArrowBackIosNewIcon fontSize="20px" className={classes.main__before} />
      <div className={classes.main__page}>1</div>
      <ArrowForwardIosIcon fontSize="20px" className={classes.main__after} />
    </div>
  );
};

export default TurnPage;
