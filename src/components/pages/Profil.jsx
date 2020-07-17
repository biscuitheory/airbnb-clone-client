import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/auth';

function Profil() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const logOut = async (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  };
  return (
    <div>
      <h1>Bonjour Client !</h1>
      <button type="button" onClick={logOut}>
        Se déconnecter
      </button>
    </div>
  );
}

export default Profil;
