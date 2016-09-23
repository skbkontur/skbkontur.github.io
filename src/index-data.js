const certImage = require('./images/cert.png');

module.exports = {
    'ru': {
        pageTitle: 'Some Page Title',
        title: 'Some title',
        menu: [
            {
                caption: 'Products',
                href: null
            },
            {
                caption: 'Google',
                href: 'http://google.com'
            },
            {
                caption: 'GitHub',
                href: 'http://github.com'
            }
        ],
        blocks: [
            {
                image: certImage,
                header: {
                    href: '#',
                    caption: 'Block header'
                },
                text: 'Lorem Ipsum is <a href="#">simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
                links: [
                    {
                        href: '#',
                        caption: 'link 1'
                    },
                    {
                        href: '#',
                        caption: 'link 2'
                    },
                    {
                        href: '#',
                        caption: 'link 3'
                    },
                ]
            },
            {
                image: certImage,
                header: {
                    href: '#',
                    caption: 'Block header'
                },
                text: 'Lorem Ipsum is <a href="#">simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
                links: [
                    {
                        href: '#',
                        caption: 'link 1'
                    },
                    {
                        href: '#',
                        caption: 'link 2'
                    },
                    {
                        href: '#',
                        caption: 'link 3'
                    },
                ]
            },
            {
                header: {
                    href: '#',
                    caption: 'Block header'
                },
                text: 'Lorem Ipsum is <a href="#">simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
                links: [
                    {
                        href: '#',
                        caption: 'link 1'
                    },
                    {
                        href: '#',
                        caption: 'link 2'
                    },
                    {
                        href: '#',
                        caption: 'link 3'
                    },
                ]
            },
            {
                header: {
                    href: '#',
                    caption: 'Block header'
                },
                text: 'Lorem Ipsum is <a href="#">simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
                links: [
                    {
                        href: '#',
                        caption: 'link 1'
                    },
                    {
                        href: '#',
                        caption: 'link 2'
                    },
                    {
                        href: '#',
                        caption: 'link 3'
                    },
                ]
            }
        ]
    }
}
