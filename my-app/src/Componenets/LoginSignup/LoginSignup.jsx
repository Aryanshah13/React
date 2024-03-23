import React, { useState } from 'react';
import './LoginSignup.css';
import userIcon from '../Assets/person.png';
import pancardIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';

const LoginSignup = ({ onRedirectToDashboard }) => {
  const [voterId, setVoterId] = useState('');
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleActionChange = (newAction) => {
    setAction(newAction);
    setVoterId('');
    setUsername('');
    setPassword('');
    setSignupSuccess(false); // Reset signup success message
  };

  const handleSubmit = () => {
    if (action === "Sign Up") {
      // Perform signup logic
      // For now, let's just assume signup is successful
      setSignupSuccess(true);
    } else {
      onRedirectToDashboard();
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {signupSuccess && (
        <div className="success-message">Signup successful! You can now login.</div>
      )}

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={userIcon} alt="" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={pancardIcon} alt="" />
          <input
            type="text"
            placeholder="Voter ID"
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
          />
        </div>
        
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="new" onClick={() => handleActionChange("Sign Up")}>
          New User? <span>Click Here!</span>
        </div>
      )}
      {action === "Sign Up" ? (
        <div className="Already">
          Already a user? <span onClick={() => handleActionChange("Login")}>Click Here!</span>
        </div>
      ) : null}
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => handleActionChange("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => handleActionChange("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

