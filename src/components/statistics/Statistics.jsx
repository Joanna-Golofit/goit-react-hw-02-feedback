//rce
import style from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  return (
    <div className={style.statistics}>     
      <ul className={style.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {total && positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,

  total: PropTypes.number,
  // positivePercentage: PropTypes.number,
  // total: PropTypes.string,
  positivePercentage: PropTypes.string,
};

export default Statistics;
