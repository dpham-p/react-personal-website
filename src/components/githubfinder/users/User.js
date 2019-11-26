import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link, useRouteMatch } from 'react-router-dom';
import GithubContext from '../../../context/githubfinder/github/githubContext';
import ghfStyle from '../../../styles/Githubfinder.module.css';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  const { url } = useRouteMatch();
  console.log(url);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link
        to='/githubfinder/'
        className={`${ghfStyle.btn} ${ghfStyle['btn-light']}`}
      >
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className={`fas fa-check ${ghfStyle['text-success']}`} />
      ) : (
        <i className={`fas fa-times-circle ${ghfStyle['text-success']}`} />
      )}
      <div className={`${ghfStyle.card} ${ghfStyle['grid-2']}`}>
        <div className={ghfStyle['all-center']}>
          <img
            src={avatar_url}
            className={ghfStyle['round-img']}
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className={`${ghfStyle.btn} ${ghfStyle['btn-dark']} ${ghfStyle['my-1']}`}
          >
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className={`${ghfStyle.badge} ${ghfStyle['badge-primary']}`}>
          Followers: {followers}
        </div>
        <div className={`${ghfStyle.badge} ${ghfStyle['badge-success']}`}>
          Following: {following}
        </div>
        <div className={`${ghfStyle.badge} ${ghfStyle['badge-light']}`}>
          Public Repos: {public_repos}
        </div>
        <div className={`${ghfStyle.badge} ${ghfStyle['badge-dark']}`}>
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
