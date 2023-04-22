import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.delete_btn}
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            <span className={css.x}>x</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
