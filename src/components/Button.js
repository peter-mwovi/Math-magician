import PropTypes from 'prop-types';

const Button = ({
  text,
  styling,
}) => (
  <button type="button" className={styling}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
};

export default Button;
