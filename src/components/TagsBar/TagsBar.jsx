import React from 'react';

import Link from 'retail-ui/components/Link';

import cn from './TagsBar.less';

export default function TagsBar({ tags, currentTag, className }) {
    return (
        <div className={cn('root', className)}>
            <div className={cn('fixed-width-content')}>
                {tags.map(tag => (
                    <Link
                        key={tag}
                        href={currentTag === tag ? '#' : '#' + tag}>
                    {tag}
                    </Link>
                ))}
        </div>
    </div>
    );
}

export function getMostPopularTags(items, tagsSelector) {
    const result = {};
    for (const item of items) {
        const tags = tagsSelector(item);
        for (const tag of tags) {
            result[tag] = (result[tag] || 0) + 1;
        }
    }
    const tags = [];
    for (var tag in result) {
        tags.push({ tag: tag, count: result[tag] });
    }
    return tags.sort((a, b) => b.count - a.count).map(x => x.tag);
}

export function getCurrentTag(location) {
    const match = /#(.+)$/.exec(location.hash);
    if (match) {
        return match[1];
    }
    return null;
}
