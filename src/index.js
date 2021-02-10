import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import AppNetflix from './AppNetflix';
import { GlobalStyles } from './global-styles';

render(
  <>
    <GlobalStyles/>
    <AppNetflix/>
  </>,
  document.getElementById('root')
);
