import React from 'react';
import Helmet from 'react-helmet';
import cn from './Talks.less';
import Icon from 'retail-ui/components/Icon';
import Link from 'retail-ui/components/Link';
import { sortByDateString } from '../../utils/sort-utils.js';
import socialMetaHeaders from '../../models/social-meta-headers';
import metaHeaders from '../../models/meta-headers';
import InfiniteLoader from '../InfiniteLoader/InfiniteLoader';

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

function buildImageProps(image) {
    const smallImage = image.images.find(x => x.width === 80);
    const normalImage = image.images[image.images.length - 1];
    return {
        src: smallImage.path,
        sizes: '(max-width: 30em) 80px, 100%',
        srcSet: `${smallImage.path} 700w, ${normalImage.path} 3000w`,
    };
}

function Talk({ talk }) {
    return (
        <article className={cn('talk')}>
            <div className={cn('image')}>
                <a href={talk.linkToVideo}>
                    <img
                        {...buildImageProps(talk.image)}
                    />
                </a>
            </div>
            <div className={cn('content')}>
                <h3><a href={talk.linkToVideo}>{talk.title}</a></h3>
                <div className={cn('speaker-and-slides-link')}>
                    <div className={cn('speaker')}>{talk.speakerFullName}</div>
                    {talk.linkToSlides && <div className={cn('slides-link')}>
                        <Link
                            href={talk.linkToSlides}
                            icon='card'>
                            Слайды
                        </Link>
                    </div>}
                </div>
                <div className={cn('short-info')}>
                    <span className={cn('event-info')}>
                        {talk.linkToEvent
                            ? <a href={talk.linkToEvent}>{[talk.eventName, talk.dateString].filter(x => x).join(', ')}</a>
                            : [talk.eventName, talk.dateString].filter(x => x).join(', ')
                        }
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

const initialLength = 9;
const increseLengthBy = 9;

export default class Talks extends React.Component {
    state = {
        size: initialLength,
    };

    handleLoadMore() {
        this.setState({
            size: this.state.size + increseLengthBy,
        });
    }

    render() {
        const { route: { talks } } = this.props;

        return (
            <main ref='el' className={cn('root-container')}>
                <div className={cn('root', 'fixed-width-content')}>
                    <Helmet
                        title={talks.title}
                        meta={[
                            ...talks.customMetaHeaders,
                            ...metaHeaders(talks.meta),
                            ...socialMetaHeaders(talks.title, talks.meta.description),
                        ]}
                        htmlAttributes={{ class: 'talks' }}
                    />
                    <InfiniteLoader className={cn('row')} onLoadMore={() => this.handleLoadMore()}>
                        {sortByDateString(talks.items, x => x.dateString).slice(0, this.state.size).map((talk, index) => (
                            <div key={index} className={cn(
                                'talk-container', 'col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-12')}>
                                <Talk talk={talk} />
                            </div>
                        ))}
                    </InfiniteLoader>
                </div>
            </main>
        );
    }
}
