// @flow
import React from 'react';
import Helmet from 'react-helmet';

import Icon from 'retail-ui/components/Icon';

import type { Article } from '../../models/articles';

import { sortByDateString } from '../../utils/sort-utils.js';
import socialMetaHeaders from '../../models/social-meta-headers';
import metaHeaders from '../../models/meta-headers';
import TagsBar, { getMostPopularTags, getCurrentTag } from '../TagsBar/TagsBar';

import cn from './Articles.less';

type ShortInfoBlockProps = {
    icon?: string;
    text: string;
};

function ShortInfoBlock({ icon, text }: ShortInfoBlockProps) {
    if (text === null || text === undefined || text === '') {
        return null;
    }
    return (
        <span className={cn('short-info-block')}>
            <Icon name={icon} />{'\u0020'}{text}
        </span>
    );
}

type ArticleProps = {
    article: Article;
};

function ArticleView({ article }: ArticleProps): React.Element<*> {
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

type ArticlesMeta = {
    title: string;
    meta: { [name: string]: string };
    customMetaHeaders: { [name: string]: string }[];
    items: Articles[];
};

type CommonComponentProps<T> = {
    location: { hash: ?string };
    route: T;
};

export default function Articles({ location, route: { articles } }: CommonComponentProps<{ articles: ArticlesMeta }>) {
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
                />
                <div className={cn('row')}>
                    {sortByDateString(articles.items, x => x.dateString)
                        .filter(x => currentTag === null || x.tags.includes(currentTag))
                        .map((article, index) => (
                            <div key={index} className={cn('article-container', 'col-xs-12')}>
                                <ArticleView article={article} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
