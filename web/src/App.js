import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from '/components/GlobalStyle';

// import routes
import Pages from '/pages';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// configure API URI & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();
//configure Apollo Client
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
           <Pages />
        </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));