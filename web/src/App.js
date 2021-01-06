import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from '/components/GlobalStyle';

// import routes
import Pages from '/pages';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';

// configure API URI & cache
const uri = process.env.API_URI;
const httpLink = createHttpLink({uri});
const cache = new InMemoryCache();

// check for a token and return the headers to the context
const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    };
});

//configure Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
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