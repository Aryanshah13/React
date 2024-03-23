import React, { useState } from 'react';
import LoginSignup from './Componenets/LoginSignup/LoginSignup';
import Dashboard from './Componenets/LoginSignup/Dashboard';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [voterId, setVoterId] = useState('');

  const redirectToDashboard = (id) => {
    setLoggedIn(true);
    setVoterId(id);
  };

  // Define the parties array with the names of the four parties
  const parties = ['BJP', 'CONGRESS', 'SHIVSENA', 'AAP'];

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard voterId={voterId} parties={parties} />
      ) : (
        <LoginSignup onRedirectToDashboard={redirectToDashboard} />
      )}
    </div>
  );
};

export default App;

