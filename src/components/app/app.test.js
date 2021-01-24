import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

//  mock data
const errorCount = 111;
const gameTime = 111;

describe(`AppSnapTest`, () => {
  it(`test`, () => {
    const tree = renderer
    .create(
        <App
          errorCount={errorCount}
          gameTime={gameTime}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
