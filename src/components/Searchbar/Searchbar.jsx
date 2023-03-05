
import '../styles.css';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="search"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.prototype = { onSubmit: PropTypes.func.isRequired };