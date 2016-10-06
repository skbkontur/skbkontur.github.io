import React from 'react';
import Helmet from 'react-helmet';
import cn from './Talks.less';
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

function Talk({ talk }) {
    return (
        <article className={cn('talk')}>
            <div className={cn('image')}>
                <a href={talk.linkToVideo}><img src={talk.image} /></a>
            </div>
            <div className={cn('content')}>
                <h3><a href={talk.linkToSlides}>{talk.title}</a></h3>
                <div className={cn('speaker')}>{talk.speakerFullName}</div>
                <div className={cn('short-info')}>
                    <ShortInfoBlock
                        icon='star'
                        text={talk.eventName}
                    />
                    <ShortInfoBlock
                        icon='calendar'
                        text={talk.dateString}
                    />
                    {talk.tags.map((x, index) => (
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

export default function Talks({ route: { talks } }) {
    return (
        <div className={cn('root', 'fixed-width-content')}>
            <Helmet title={talks.title} />
            <div className={cn('row')}>
                {talks.items.map((talk, index) => (
                    <div key={index} className={cn('talk-container', 'col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-12')}>
                        <Talk talk={talk} />
                    </div>
                ))}
            </div>
        </div>
    );
}
