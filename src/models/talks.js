import relayImage from './images/relay.png';

export default {
    title: 'Выступления',
    meta: [
        { ['http-equiv']: 'content-language', ['content']: 'ru-RU' },
        { ['name']: 'description', ['content']: 'Записи докладов с конференции от компании СКБ Контур' },
        { ['name']: 'keywords', ['content']: 'видео,технологии,доклад,скб контур' },
    ],
    items: [
        {
            image: relayImage,
            speakerFullName: 'Волокитин Павел',
            eventName: 'FrontendFellows #1',
            title: 'Relay или не Relay',
            dateString: '29.01.2016',
            tags: ['frontend'],
            linkToVideo: 'https://www.youtube.com/watch?v=v5Fi-djuwZk',
            linkToSlides: 'http://www.slideshare.net/PavelVolokitin/frontfellows-relay-66758880',
        },
    ],
};
