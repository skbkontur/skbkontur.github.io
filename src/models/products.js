import React from 'react';

import moiraImage from './images/products/moira.png';
import ditraceImage from './images/products/ditrace.png';
import gitHubImage from './images/products/github.png';

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
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/homuroll/gremit',
                    caption: 'GrEmit'
                },
                text: <span>Инструменты для генерации кода через Reflection.Emit, в том числе GroboIL — умная обертка над <a href="http://msdn.microsoft.com/en-us/library/system.reflection.emit.ilgenerator.aspx">ILGenerator</a></span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/homuroll/GroBuf',
                    caption: 'GroBuf'
                },
                text: <span>Быстрая бинарная сериализация для .NET</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/homuroll/GrobExp.Compiler',
                    caption: 'GrobExp.Compiler'
                },
                text: <span>Эффективная компиляция деревьев выражений для .NET</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/misha-plus/ytissues-confluence',
                    caption: 'ytissues-confluence'
                },
                text: <span>Макрос Confluence для вставки на страницы интерактивных ссылок на задачи YouTrack</span>,
                links: []
            },
        ]
    },
    'en': {
        title: 'Open source technology and solutions company SKB Kontur: Moira, DiTrace and more',
        meta: {
            description: 'Open source technology company SKB Kontur. Moira — Mail, Telegram, Slack and Pushover notifications based on Graphite metrics, DiTrace — request tracing for bottlenecks analysis in distributed systems',
            keywords: 'open source, open-sourсe, oss, skb kontur, skb-kontur, kontur, Moira, DiTrace, ZstdNet, reelm, cspreport',
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
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/homuroll/gremit',
                    caption: 'GrEmit'
                },
                text: <span>Helpers for generating code using Reflection.Emit with the main one being GroboIL — a smart wrapper over <a href="http://msdn.microsoft.com/en-us/library/system.reflection.emit.ilgenerator.aspx">ILGenerator</a></span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/homuroll/GroBuf',
                    caption: 'GroBuf'
                },
                text: <span>Fast binary serializer for .NET</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/homuroll/GrobExp.Compiler',
                    caption: 'GrobExp.Compiler'
                },
                text: <span>Effective compiler of .NET expression trees</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/misha-plus/ytissues-confluence',
                    caption: 'ytissues-confluence'
                },
                text: <span>Helpful macros for inserting interactive links to YouTrack issues</span>,
                links: []
            },
        ]
    }
}
