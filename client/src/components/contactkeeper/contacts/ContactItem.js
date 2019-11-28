import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../../context/contactkeeper/contact/contactContext';

import ckStyle from '../../../styles/Contactkeeper.module.css';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className={`card ${ckStyle['bg-light']}`}>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional'
              ? ckStyle['badge-success']
              : ckStyle['badge-primary'])
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className={`btn ${ckStyle['btn-dark']} btn-sm`}
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button
          className={`btn ${ckStyle['btn-danger']} btn-sm`}
          onClick={onDelete}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactItem;
