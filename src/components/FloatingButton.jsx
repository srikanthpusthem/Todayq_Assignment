import React from 'react';
import { useHistory } from 'react-router-dom';
import './FloatingButton.css';

const FloatingButton = () => {
  const history = useHistory();

  return (
    <button className="floating-button" onClick={() => history.push('/submit')}>
      +
    </button>
  );
};

export default FloatingButton;
