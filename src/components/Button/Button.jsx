import PropTypes from 'prop-types';
import '../styles';

export function Button({ onClick }) {
  return (
    <div>
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

Button.prototype = { onClick: PropTypes.func.isRequired };