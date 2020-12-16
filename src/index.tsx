import React from 'react';
import ReactDOM from 'react-dom';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider } from 'react-apollo';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  //NormalizedObjectCache,
} from '@apollo/client';
//import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4005/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
