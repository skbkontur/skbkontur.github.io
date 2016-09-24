const moiraImage = require('../images/moira.png');

module.exports = {
    'ru': {
        lang: 'ru',
        skbkonturSinceCaption: 'c 1988 года',
        pageTitle: 'Технологии Контура',
        title: 'Open Source',
        menu: [
            {
                caption: 'Open Source',
                href: null
            },
            {
                caption: 'Выступления',
                href: '/talks.html'
            },
            {
                caption: 'Статьи',
                href: '/articles.html',
            }
        ],
        blocks: [
            {
                image: moiraImage,
                header: {
                    href: 'https://moira.readthedocs.io/',
                    caption: 'Moira'
                },
                text: 'Уведомления по почте, Telegram, Slack, Pushover на основании метрик из <a href="https://graphite.readthedocs.io/">Graphite</a>',
                links: [
                    {
                        href: 'https://github.com/moira-alert',
                        caption: 'Код'
                    },
                    {
                        href: 'https://moira.readthedocs.io/',
                        caption: 'Документация'
                    },
                ]
            },
            {
                header: {
                    href: 'https://github.com/skbkontur/ZstdNet',
                    caption: 'ZstdNet'
                },
                text: '.NET-обертка над библиотекой сжатия <a href="http://www.zstd.net">Zstandard</a>',
                links: []
            },
            {
                header: {
                    href: 'https://github.com/tihonove/reelm',
                    caption: 'reelm'
                },
                text: 'Библиотека для управления эффектами в <a href="http://redux.js.org">redux</a>',
                links: []
            },
        ]
    },
    'en': {
        lang: 'en',
        skbkonturSinceCaption: 'since 1988',
        pageTitle: 'Технологии Контура',
        title: 'Open Source',
        menu: [
            {
                caption: 'Open Source',
                href: null
            },
            {
                caption: 'Talks',
                href: '/talks.html'
            },
            {
                caption: 'Articles',
                href: '/articles.html',
            }
        ],
        blocks: [
            {
                image: moiraImage,
                header: {
                    href: 'https://moira.readthedocs.io/',
                    caption: 'Moira'
                },
                text: 'Уведомления по почте, Telegram, Slack, Pushover на основании метрик из <a href="https://graphite.readthedocs.io/">Graphite</a>',
                links: [
                    {
                        href: 'https://github.com/moira-alert',
                        caption: 'Код'
                    },
                    {
                        href: 'https://moira.readthedocs.io/',
                        caption: 'Документация'
                    },
                ]
            },
            {
                header: {
                    href: 'https://github.com/skbkontur/ZstdNet',
                    caption: 'ZstdNet'
                },
                text: '.NET-обертка над библиотекой сжатия <a href="http://www.zstd.net">Zstandard</a>',
                links: []
            },
            {
                header: {
                    href: 'https://github.com/tihonove/reelm',
                    caption: 'reelm'
                },
                text: 'Библиотека для управления эффектами в <a href="http://redux.js.org">redux</a>',
                links: []
            },
        ]
    }
}
