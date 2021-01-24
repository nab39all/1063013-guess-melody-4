import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

//  mock data
const time = 999;
const error = 999;
const onPlayButtonClick = () => {
  return 1;
};


it(`Test WelcomeScreen with mock data`, () => {
  const tree = renderer
      .create(<WelcomeScreen time={time} errorCount={error} onPlayButtonClick={onPlayButtonClick}/>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

