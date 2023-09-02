import PropTypes from 'prop-types';

const Button = ({
  text,
  styling,
  onClick,
}) => (
  <button type="button" className={styling} onClick={() => onClick(text)}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
