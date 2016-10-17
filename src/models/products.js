import React from 'react';

import moiraImage from '../images/moira.png';
import ditraceImage from '../images/ditrace.png';
import gitHubImage from '../images/github.png';

export default {
    ['ru']: {
        title: 'Open source технологии и решения компании СКБ Контур: Moira, DiTrace и многое другое',
        meta: {
            keywords: 'open source, open-sourсe, oss, скб контур, скб-контур, контур, открытый код, Moira, DiTrace, ZstdNet, reelm, cspreport',
            description: 'Open source технологии компании СКБ Контур. Moira — решение по уведомлениям из Graphite, DiTrace — трассировка запросов в распределенных системах и другие решения',
        },
        customMetaHeaders: [
            { ['http-equiv']: 'content-language', ['content']: 'ru-RU' },
        ],
        blocks: [
            {
                image: moiraImage,
                header: {
                    href: 'https://moira.readthedocs.io/',
                    caption: 'Moira'
                },
                text: <span>Уведомления по почте, Telegram, Slack, Pushover на основании метрик из <a href="https://graphite.readthedocs.io/">Graphite</a></span>,
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
                text: <span>.NET-обертка над библиотекой сжатия <a href="http://www.zstd.net">Zstandard</a></span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/tihonove/reelm',
                    caption: 'reelm'
                },
                text: <span>Библиотека для управления эффектами в <a href="http://redux.js.org">redux</a></span>,
                links: []
            },
            {
                image: ditraceImage,
                header: {
                    href: 'https://ditrace.readthedocs.io/',
                    caption: 'DiTrace'
                },
                text: <span>Трассировка запросов для анализа узких мест в распределенных системах</span>,
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
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/cspreport',
                    caption: 'cspreport'
                },
                text: <span>Шлюз для сбора отчетов о нарушении политик безопасности <a href="https://en.wikipedia.org/wiki/Content_Security_Policy">CSP</a> и <a href="https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning">HPKP</a></span>,
                links: []
            },
        ]
    },
    'en': {
        title: 'Open Source',
        meta: {
            description: 'SKB Kontur Open source',
            keywords: 'open source,skb kontur',
        },
        customMetaHeaders: [
            { ['http-equiv']: 'content-language', ['content']: 'en-US' },
        ],
        blocks: [
            {
                image: moiraImage,
                header: {
                    href: 'https://moira.readthedocs.io/',
                    caption: 'Moira'
                },
                text: <span>Mail, Telegram, Slack and Pushover notifications based on <a href="https://graphite.readthedocs.io/">Graphite</a> metrics</span>,
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
                text: <span>.NET-wrapper of <a href="http://www.zstd.net">Zstandard</a> compression library</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/tihonove/reelm',
                    caption: 'reelm'
                },
                text: <span>Awesome effect management library for <a href="http://redux.js.org">redux</a></span>,
                links: []
            },
            {
                image: ditraceImage,
                header: {
                    href: 'https://ditrace.readthedocs.io/',
                    caption: 'DiTrace'
                },
                text: <span>Request tracing for bottlenecks analysis in distributed systems</span>,
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
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/cspreport',
                    caption: 'cspreport'
                },
                text: <span><a href="https://en.wikipedia.org/wiki/Content_Security_Policy">CSP</a> and <a href="https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning">HPKP</a> policy violation report collector</span>,
                links: []
            },
        ]
    }
}
