import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Helmet from "react-helmet";

import layout from './models/layout';
import Layout from './components/Layout';

import products from './models/products';
import Products from './components/Products';

function Talks() {
    return <div><Helmet title="Выступления" /></div>;
}

function Articles() {
    return <div><Helmet title="Статьи" /></div>;
}

export default [
    <Route>
        <Route layout={layout.ru} component={Layout} path='/(ru)'>
            <IndexRoute
                products={products.ru}
                components={{ content: Products, title: () => <span>Open Source</span>}}>
            </IndexRoute>
            <Route
                path='talks'
                components={{ content: Talks, title: () => <span>Выступления</span>}}>
            </Route>
            <Route
                path='articles'
                components={{ content: Articles, title: () => <span>Статьи</span>}}>
            </Route>
        </Route>
        <Route layout={layout.en} component={Layout} path='/en'>
            <IndexRoute
                products={products.en}
                components={{ content: Products, title: () => <span>Open Source</span>}}>
            </IndexRoute>
        </Route>
    </Route>
];
