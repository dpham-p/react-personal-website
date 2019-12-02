import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../../context/contactkeeper/auth/authContext';
import Media from 'react-media';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Media
      queries={{
        small: '(max-width: 599px)',
        medium: '(min-width: 600px) and (max-width: 1199px)',
        large: '(min-width: 1200px)'
      }}
    >
      {matches => (
        <div className={matches.large ? 'grid-2' : 'grid-1'}>
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactFilter />
            <Contacts />
          </div>
        </div>
      )}
    </Media>
  );
};

export default Home;
