import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WelcomeScreen e2e`, () => {
  it(`Should play button be passed`, () => {
    const onPlayButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          time={777}
          errorCount={777}
          onPlayButtonClick={onPlayButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);
    welcomeButton.props().onClick();

    welcomeButton.simulate(`click`);
  });
});
