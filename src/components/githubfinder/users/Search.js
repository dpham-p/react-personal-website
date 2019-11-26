import React, { useState, useContext } from 'react';
import GithubContext from '../../../context/githubfinder/github/githubContext';
import AlertContext from '../../../context/githubfinder/alert/alertContext';
import ghfStyle from '../../../styles/Githubfinder.module.css';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something.', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users..'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className={`${ghfStyle.btn} ${ghfStyle['btn-dark']} ${
            ghfStyle['btn-block']
          }`}
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className={`${ghfStyle.btn} ${ghfStyle['btn-light']} ${
            ghfStyle['btn-block']
          }`}
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
