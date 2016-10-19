import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';

import layout from './models/layout';
import Layout from './components/Layout/Layout';

import products from './models/products';
import Products from './components/Products/Products';

import talks from './models/talks';
import Talks from './components/Talks/Talks';

import articles from './models/articles';
import Articles from './components/Articles/Articles';

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
                components={{
                    additionalFooterText: () => <span>{talks.additionalFooterText}</span>,
                    content: Talks,
                    title: () => <span>Выступления</span>,
                }}
            />
            <Route
                path='articles'
                articles={articles}
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
