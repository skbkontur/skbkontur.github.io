const moiraImage = require('../images/moira.png');
const ditraceImage = require('../images/ditrace.png');
const gitHubImage = require('../images/github.png');

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
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/ZstdNet',
                    caption: 'ZstdNet'
                },
                text: '.NET-обертка над библиотекой сжатия <a href="http://www.zstd.net">Zstandard</a>',
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/tihonove/reelm',
                    caption: 'reelm'
                },
                text: 'Библиотека для управления эффектами в <a href="http://redux.js.org">redux</a>',
                links: []
            },
            {
                image: ditraceImage,
                header: {
                    href: 'https://ditrace.readthedocs.io/',
                    caption: 'DiTrace'
                },
                text: 'Трассировка запросов для анализа узких мест в распределенных системах',
                links: [
                    {
                        href: 'https://github.com/ditrace',
                        caption: 'Код'
                    },
                    {
                        href: 'http://ditrace.readthedocs.io/',
                        caption: 'Документация'
                    },
                ]
            },
        ]
    },
    'en': {
        lang: 'en',
        skbkonturSinceCaption: 'since 1988',
        pageTitle: 'Kontur Tech',
        title: 'Open Source',
        menu: [
            {
                caption: 'Open Source',
                href: null
            },
        ],
        blocks: [
            {
                image: moiraImage,
                header: {
                    href: 'https://moira.readthedocs.io/',
                    caption: 'Moira'
                },
                text: 'Mail, Telegram, Slack and Pushover notifications based on <a href="https://graphite.readthedocs.io/">Graphite</a> metrics',
                links: [
                    {
                        href: 'https://github.com/moira-alert',
                        caption: 'Code'
                    },
                    {
                        href: 'https://moira.readthedocs.io/',
                        caption: 'Docs'
                    },
                ]
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/ZstdNet',
                    caption: 'ZstdNet'
                },
                text: '.NET-wrapper of <a href="http://www.zstd.net">Zstandard</a> compression library',
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/tihonove/reelm',
                    caption: 'reelm'
                },
                text: 'Awesome effect management library for <a href="http://redux.js.org">redux</a>',
                links: []
            },
            {
                image: ditraceImage,
                header: {
                    href: 'https://ditrace.readthedocs.io/',
                    caption: 'DiTrace'
                },
                text: 'Request tracing for bottlenecks analysis in distributed systems',
                links: [
                    {
                        href: 'https://github.com/ditrace',
                        caption: 'Code'
                    },
                    {
                        href: 'http://ditrace.readthedocs.io/',
                        caption: 'Docs'
                    },
                ]
            },
        ]
    }
}
