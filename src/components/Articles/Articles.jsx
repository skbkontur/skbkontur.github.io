import React from 'react';
import Helmet from 'react-helmet';
import cn from './Articles.less';
import Icon from 'retail-ui/components/Icon';


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
                <div className={cn('speaker')}>{article.speakerFullName}</div>
                <div className={cn('short-info')}>
                    <ShortInfoBlock
                        icon='star'
                        text={article.eventName}
                    />
                    <ShortInfoBlock
                        icon='calendar'
                        text={article.dateString}
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
            <Helmet title={articles.title} />
            <div className={cn('row')}>
                {articles.items.map((article, index) => (
                    <div key={index} className={cn('article-container', 'col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-12')}>
                        <Article article={article} />
                    </div>
                ))}
            </div>
        </div>
    );
}
