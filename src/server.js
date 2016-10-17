import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
    match,
    createMemoryHistory,
    RouterContext,
} from 'react-router';
import Helmet from 'react-helmet';
import template from './template.ejs';
import routes from './routes';
import '!file?name=favicon.ico!./images/favicon.ico';

export default (locals, callback) => {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);
    const files = locals.webpackStats.compilation.getStats().toJson().assetsByChunkName;
    const cssFiles = files.index.filter(x => /.css$/.test(x));
    const jsFiles = files.index.filter(x => /.js$/.test(x));

    match({ routes, location }, (error, redirectLocation, renderProps) => {
        callback(null, template({
            html: ReactDOMServer.renderToString(<RouterContext {...renderProps} />),
            assets: {
                js: jsFiles,
                css: cssFiles,
            },
            head: Helmet.rewind(),
        }));
    });
};
