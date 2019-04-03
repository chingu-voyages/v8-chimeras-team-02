import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./components/Router";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { getToken } from './utils';

const cache = new InMemoryCache({
    dataIdFromObject: o => o.id
});

const client = new ApolloClient({
    uri: 'http://localhost:3003/graphql',
    headers: {
        // authorization: getToken() ? `Bearer ${getToken()}` : '',
        authorization: ''
    },
    cache
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router />
        </ApolloProvider>
    )
};


ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
