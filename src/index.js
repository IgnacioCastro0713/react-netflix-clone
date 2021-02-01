import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from "./global-styles";

render(
  <>
    <GlobalStyles></GlobalStyles>
    <App/>
  </>,
  document.getElementById('root')
);
