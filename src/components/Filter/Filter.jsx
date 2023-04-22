import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, onChangeInput }) => {
  return (
    <div className={css.filter_container}>
      <label className={css.filter_label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filter}
        onChange={onChangeInput} // при зміні значення поля - виклик функції onChangeInput
        value={filter} // початкове значення, яке зберігається в filter
        type="text"
        name="filter"
      />
    </div>
  );
};

export default Filter;
