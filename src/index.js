import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
    browserHistory,
    createMemoryHistory,
    IndexRoute,
    Route,
    Router,
    RouterContext,
    match
} from 'react-router';
import Helmet from "react-helmet";
import template from './template.ejs';
import routes from './routes';

if (typeof document !== 'undefined') {
    const content = document.getElementById('content');
    ReactDOM.render(<Router history={browserHistory} routes={routes} />, content);
}

export default (locals, callback) => {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);
    const z = locals.webpackStats.compilation.getStats().toJson().assetsByChunkName;
    const cssFiles = z.index.filter(x => /.css$/.test(x))
    const jsFiles = z.index.filter(x => /.js$/.test(x))

    match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (!renderProps) {
            console.log(location);
        }
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
