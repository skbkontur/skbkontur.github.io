import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Helmet from 'react-helmet';

import layout from './models/layout';
import Layout from './components/Layout';

import products from './models/products';
import Products from './components/Products';

import talks from './models/talks';
import Talks from './components/Talks/Talks';

function Articles() {
    return <div><Helmet title='Статьи' /></div>;
}

export default (
    <Route>
        <Route layout={layout.ru} component={Layout} path='/(ru)'>
            <IndexRoute
                products={products.ru}
                components={{ content: Products, title: () => <span>Open Source</span>}}
            />
            <Route
                path='talks'
                talks={talks}
                components={{ content: Talks, title: () => <span>Выступления</span>}}
            />
            <Route
                path='articles'
                components={{ content: Articles, title: () => <span>Статьи</span>}}
            />
        </Route>
        <Route layout={layout.en} component={Layout} path='/en'>
            <IndexRoute
                products={products.en}
                components={{ content: Products, title: () => <span>Open Source</span>}}
            />
        </Route>
    </Route>
);
