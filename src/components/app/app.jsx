import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen';


const App = (props) => {
  const {gameTime, errorCount, onPlayButtonClick} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onPlayButtonClick={onPlayButtonClick}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default App;
