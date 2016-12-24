import React from 'react';
import Helmet from 'react-helmet';
import cn from './Articles.less';
import Icon from 'retail-ui/components/Icon';
import { sortByDateString } from '../../utils/sort-utils.js';
import socialMetaHeaders from '../../models/social-meta-headers';
import metaHeaders from '../../models/meta-headers';
import TagsBar, { getMostPopularTags, getCurrentTag } from '../TagsBar/TagsBar';

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
                        text={[article.speakerFullName, article.dateString].filter(x => x).join(', ')}
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

export default function Articles({ location, route: { articles } }) {
    const currentTag = getCurrentTag(location);

    return (
        <div className={cn('root')}>
            <TagsBar
                className={cn('tags-bar')}
                currentTag={currentTag}
                tags={getMostPopularTags(articles.items, x => x.tags)}
            />
            <div className={cn('fixed-width-content')}>
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
                    {sortByDateString(articles.items, x => x.dateString)
                        .filter(x => currentTag === null || x.tags.includes(currentTag))
                        .map((article, index) => (
                            <div key={index} className={cn('article-container', 'col-xs-12')}>
                                <Article article={article} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
