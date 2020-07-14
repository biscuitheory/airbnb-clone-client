import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';

function Profil() {
  const { dispatch } = useContext(AuthContext);
  const logOut = async (event) => {
    event.preventDefault();
    return dispatch({
      type: 'LOGOUT',
    });
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
