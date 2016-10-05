import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';
import routes from './routes';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('content')
);
