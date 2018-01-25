import React from 'react';

import moiraImage from './images/products/moira.png';
import ditraceImage from './images/products/ditrace.png';
import cementImage from './images/products/cement.png';
import vostokImage from './images/products/vostok.png';
import guidesImage from './images/products/guides.png';
import gitHubImage from './images/products/github.png';

export default {
    ['ru']: {
        title: 'Open source технологии и решения компании СКБ Контур: Moira, DiTrace и многое другое',
        meta: {
            keywords: 'open source, open-sourсe, oss, скб контур, скб-контур, контур, открытый код, Moira, DiTrace, ZstdNet, reelm, frontreport',
            description: 'Open source технологии компании СКБ Контур. Moira — решение по уведомлениям из Graphite, DiTrace — трассировка запросов в распределенных системах и другие решения',
        },
        customMetaHeaders: [
            { ['http-equiv']: 'content-language', ['content']: 'ru-RU' },
        ],
        blocks: [
            {
                image: vostokImage,
                header: {
                    href: 'http://vostok.tools',
                    caption: 'Восток'
                },
                text: <span>Экосистема для микросервисов на&nbsp;платформе .NET</span>,
                links: [
                    {
                        href: 'https://github.com/vostok',
                        caption: 'Код'
                    },
                ]
            },
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
                image: guidesImage,
                header: {
                    href: 'https://guides.kontur.ru',
                    caption: 'Гайды'
                },
                text: <span>Первоисточник требований к&nbsp;дизайну интерфейсов Контура</span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/retail-ui',
                        caption: 'Библиотека компонентов'
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
                links: [
                    {
                        href: 'https://github.com/skbkontur/ZstdNet',
                        caption: 'Код'
                    },
                    {
                        href: 'https://www.nuget.org/packages/ZstdNet/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: cementImage,
                header: {
                    href: 'https://github.com/skbkontur/cement',
                    caption: 'cement'
                },
                text: <span>Система управления зависимостями для C#</span>,
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
                    href: 'https://github.com/skbkontur/frontreport',
                    caption: 'frontreport'
                },
                text: <span>Шлюз для сбора логов ошибок из&nbsp;браузеров пользователей</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/gremit',
                    caption: 'GrEmit'
                },
                text: <span>Инструменты для генерации кода через Reflection.Emit, в том числе GroboIL — умная обертка над&nbsp;<a href="http://msdn.microsoft.com/en-us/library/system.reflection.emit.ilgenerator.aspx">ILGenerator</a></span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/gremit',
                        caption: 'Код'
                    },
                    {
                        href: 'https://www.nuget.org/packages/GrEmit/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/GroBuf',
                    caption: 'GroBuf'
                },
                text: <span>Быстрая бинарная сериализация для .NET и Java</span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/GroBuf',
                        caption: 'Код (C#)'
                    },
                    {
                        href: 'https://github.com/skbkontur/grobufJVM',
                        caption: 'Код (Java)'
                    },
                    {
                        href: 'https://www.nuget.org/packages/GroBuf/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/GrobExp.Compiler',
                    caption: 'GrobExp.Compiler'
                },
                text: <span>Эффективная компиляция деревьев выражений для .NET</span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/GrobExp.Compiler',
                        caption: 'Код'
                    },
                    {
                        href: 'https://www.nuget.org/packages/GrobExp.Compiler/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/misha-plus/ytissues-confluence',
                    caption: 'ytissues-confluence'
                },
                text: <span>Макрос Confluence для вставки на&nbsp;страницы интерактивных ссылок на&nbsp;задачи YouTrack</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/OctoPnP',
                    caption: 'OctoPnP'
                },
                text: <span>Плагин TeamCity для упаковки и&nbsp;публикации пакетов в систему автоматического деплоя Octopus</span>,
                links: []
            },
        ]
    },
    'en': {
        title: 'Open source technology and solutions company SKB Kontur: Moira, DiTrace and more',
        meta: {
            description: 'Open source technology company SKB Kontur. Moira — Mail, Telegram, Slack and Pushover notifications based on Graphite metrics, DiTrace — request tracing for bottlenecks analysis in distributed systems',
            keywords: 'open source, open-sourсe, oss, skb kontur, skb-kontur, kontur, Moira, DiTrace, ZstdNet, reelm, frontreport',
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
                links: [
                    {
                        href: 'https://github.com/skbkontur/ZstdNet',
                        caption: 'Code'
                    },
                    {
                        href: 'https://www.nuget.org/packages/ZstdNet/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: cementImage,
                header: {
                    href: 'https://github.com/skbkontur/cement',
                    caption: 'cement'
                },
                text: <span>C# dependency management tool</span>,
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
                    href: 'https://github.com/skbkontur/frontreport',
                    caption: 'frontreport'
                },
                text: <span>Browser stacktrace and policy violation report collector</span>,
                links: []
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/gremit',
                    caption: 'GrEmit'
                },
                text: <span>Helpers for generating code using Reflection.Emit with the main one being GroboIL — a smart wrapper over <a href="http://msdn.microsoft.com/en-us/library/system.reflection.emit.ilgenerator.aspx">ILGenerator</a></span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/gremit',
                        caption: 'Code'
                    },
                    {
                        href: 'https://www.nuget.org/packages/GrEmit/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/GroBuf',
                    caption: 'GroBuf'
                },
                text: <span>Fast binary serializer for .NET and Java</span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/GroBuf',
                        caption: 'Code (C#)'
                    },
                    {
                        href: 'https://github.com/skbkontur/grobufJVM',
                        caption: 'Code (Java)'
                    },
                    {
                        href: 'https://www.nuget.org/packages/GroBuf/',
                        caption: 'NuGet'
                    },
                ]
            },
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/GrobExp.Compiler',
                    caption: 'GrobExp.Compiler'
                },
                text: <span>Effective compiler of .NET expression trees</span>,
                links: [
                    {
                        href: 'https://github.com/skbkontur/GrobExp.Compiler',
                        caption: 'Code'
                    },
                    {
                        href: 'https://www.nuget.org/packages/GrobExp.Compiler/',
                        caption: 'NuGet'
                    },
                ]
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
            {
                image: gitHubImage,
                header: {
                    href: 'https://github.com/skbkontur/OctoPnP',
                    caption: 'OctoPnP'
                },
                text: <span>TeamCity plugin with pack-and-publish functionality for Octopus-based deployments automation</span>,
                links: []
            },
        ]
    }
}
