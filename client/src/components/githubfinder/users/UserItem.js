import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import ghfStyle from '../../../styles/Githubfinder.module.css';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  let { url } = useRouteMatch();

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className={ghfStyle['round-img']}
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`${url}/user/${login}`}
          className={`${ghfStyle.btn} ${ghfStyle['btn-dark']} ${ghfStyle['btn-sm']} ${ghfStyle['my-1']}`}
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;
