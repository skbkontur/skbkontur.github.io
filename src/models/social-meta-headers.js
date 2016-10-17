export default (title, description) => [
    { content: 'summary', name: 'twitter:card' },
    { content: '@skbkontur', name: 'twitter:site' },
    { content: '@skbkontur', name: 'twitter:creator' },
    { content: 'article', property: 'og:type' },
    { content: 'http://tech.skbkontur.ru', property: 'og:url' },
    { content: title, property: 'og:title' },
    { content: title, property: 'og:site_name' },
    { content: description, property: 'og:description' },
    { property: 'og:type', content: 'website' },
]

