import './index.css';
import React from 'react';
import { render, } from 'react-dom';
import { ApolloProvider, } from 'react-apollo';
import { BrowserRouter, Route, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';

import registerServiceWorker from './registerServiceWorker';
import { qUtils, styleManager, theme, } from './utils';
import { getStore, } from './store';
import Main from './components';

const { initClient, } = qUtils;

const client = initClient();

render(
  <ApolloProvider client={client} store={getStore(client)}>
    <MuiThemeProvider theme={theme} styleManager={styleManager}>
      <BrowserRouter>
        <Route component={Main} />
      </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>

, document.getElementById('root'));

registerServiceWorker();
