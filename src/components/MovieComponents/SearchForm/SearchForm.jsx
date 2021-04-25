import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('batman');

  const handleChange = e => setInputValue(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    inputValue.length > 0 ? onSubmit(inputValue) : setInputValue('');
    setInputValue('');
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.moviesPageFormInput}
        value={inputValue}
        placeholder="Search by movie title"
        onChange={handleChange}
      />
      <button className={s.moviesPageFormBtn} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
