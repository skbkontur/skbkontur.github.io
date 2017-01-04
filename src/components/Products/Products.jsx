import React from 'react';
import Helmet from 'react-helmet';

import socialMetaHeaders from '../../models/social-meta-headers';
import metaHeaders from '../../models/meta-headers';

import cn from './Products.less';

export default function Products({ route: { products } }) {
    return (
        <main className={cn('block-container')}>
            <div className={cn('blocks', 'fixed-width-content')}>
                <Helmet
                    title={products.title}
                    meta={[
                        ...products.customMetaHeaders,
                        ...metaHeaders(products.meta),
                        ...socialMetaHeaders(products.title, products.meta.description),
                    ]}
                />
                <div className={cn('row')}>
                    {products.blocks.map((block, index) => (
                        <div
                            key={index}
                            className={cn('block-wrapper', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-12')}>
                            <article className={cn('block')}>
                                {block.image &&
                                    <div className={cn('image')}><img src={block.image} /></div>
                                }
                                <div className={cn('content')}>
                                    <h3>
                                        <a href={block.header.href}>{block.header.caption}</a>
                                    </h3>
                                    <div className={cn('text')}>
                                        {block.text}
                                    </div>
                                    <div className={cn('links')}>
                                        {block.links.map((link, index) => (
                                            <a key={index} href={link.href}>{link.caption}</a>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
