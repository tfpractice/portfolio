import './index.css';
import React from 'react';
import { render, } from 'react-dom';

// import { Provider, } from 'react-redux';
import { BrowserRouter, Route, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';

import { styleManager, theme, } from './utils';

// import getStore from './store';

// import { App, } from './components';
import App from './components/base/App';
import Main from './components';

import registerServiceWorker from './registerServiceWorker';

render(
  <MuiThemeProvider theme={theme} styleManager={styleManager}>
    <BrowserRouter>
      <Route component={Main} />
    </BrowserRouter>
  </MuiThemeProvider>
, document.getElementById('root'));

registerServiceWorker();
