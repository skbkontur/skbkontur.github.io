import React from 'react';
import Helmet from 'react-helmet';
import cn from './Talks.less';
import Icon from 'retail-ui/components/Icon';
import Link from 'retail-ui/components/Link';
import moment from 'moment';

function Tag({ text }) {
    if (text === null || text === undefined || text === '') {
        return null;
    }
    return (
        <span className={cn('tag')}>
            <Icon name='tag' />{'\u0020'}{text}
        </span>
    );
}

function compareTalkDateStrings(left, right) {
    const leftDate = moment(left, 'MMMM YYYY', 'ru').toDate();
    const rightDate = moment(right, 'MMMM YYYY', 'ru').toDate();
    return (leftDate > rightDate) - (leftDate < rightDate);
}

function sortTalks(talks) {
    const talksToSort = [...talks];
    talksToSort.sort((left, right) => -compareTalkDateStrings(left.dateString, right.dateString));
    return talksToSort;
}

function Talk({ talk }) {
    return (
        <article className={cn('talk')}>
            <div className={cn('image')}>
                <a href={talk.linkToVideo}><img src={talk.image} /></a>
            </div>
            <div className={cn('content')}>
                <h3><a href={talk.linkToVideo}>{talk.title}</a></h3>
                <div className={cn('speaker-and-slides-link')}>
                    <div className={cn('speaker')}>{talk.speakerFullName}</div>
                    <div className={cn('slides-link')}>
                        <Link
                            href={talk.linkToSlides}
                            icon='card'>
                            Слайды
                        </Link>
                    </div>
                </div>
                <div className={cn('short-info')}>
                    <span className={cn('event-info')}>
                        {[talk.eventName, talk.dateString].filter(x => x).join(', ')}
                    </span>
                    {talk.tags.map((x, index) => (
                        <Tag
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

export default function Talks({ route: { talks } }) {
    return (
        <div className={cn('root', 'fixed-width-content')}>
            <Helmet
                title={talks.title}
                meta={talks.meta}
            />
            <div className={cn('row')}>
                {sortTalks(talks.items).map((talk, index) => (
                    <div key={index} className={cn(
                        'talk-container', 'col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-12')}>
                        <Talk talk={talk} />
                    </div>
                ))}
            </div>
        </div>
    );
}
