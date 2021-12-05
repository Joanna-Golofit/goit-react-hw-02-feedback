//rce
import style from "./Button.module.css"
import PropTypes from "prop-types";


const Button = ({ onClick, label }) => {
  return (
    <>
      <button className={style.button} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button
