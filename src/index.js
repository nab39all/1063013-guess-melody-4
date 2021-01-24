import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const settings = {
    gameTime: 8,
    errorCount: 3,
  };
  const onPlayButtonClick = () => {
    return 1;
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onPlayButtonClick={onPlayButtonClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
