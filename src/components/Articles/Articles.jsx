import React from 'react';
import Helmet from 'react-helmet';
import cn from './Articles.less';
import Icon from 'retail-ui/components/Icon';
import { sortByDateString } from '../../utils/sort-utils.js';
import socialMetaHeaders from '../../models/social-meta-headers';
import metaHeaders from '../../models/meta-headers';

function ShortInfoBlock({ icon, text }) {
    if (text === null || text === undefined || text === '') {
        return null;
    }
    return (
        <span className={cn('short-info-block')}>
            <Icon name={icon} />{'\u0020'}{text}
        </span>
    );
}

function Article({ article }) {
    return (
        <article className={cn('article')}>
            <div className={cn('content')}>
                <h3><a href={article.linkToSlides}>{article.title}</a></h3>
                <div className={cn('annotation')}>
                    {article.annotation}
                </div>
                <div className={cn('short-info')}>
                    <ShortInfoBlock
                        text={article.speakerFullName +', ' + article.dateString}
                        />
                    {article.tags.map((x, index) => (
                        <ShortInfoBlock
                            key={index}
                            icon='tag'
                            text={x}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Articles({ route: { articles } }) {
    return (
        <div className={cn('root', 'fixed-width-content')}>
            <Helmet
                title={articles.title}
                meta={[
                    ...articles.customMetaHeaders,
                    ...metaHeaders(articles.meta),
                    ...socialMetaHeaders(articles.title, articles.meta.description),
                ]}
                htmlAttributes={{ class: cn('articles') }}
            />
            <div className={cn('row')}>
                {sortByDateString(articles.items, x => x.dateString).map((article, index) => (
                    <div key={index} className={cn('article-container', 'col-xs-12')}>
                        <Article article={article} />
                    </div>
                ))}
            </div>
        </div>
    );
}
