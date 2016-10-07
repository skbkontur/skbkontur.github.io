import volokitinImage from './images/volokitin.jpg';
import kazakovImage from './images/kazakov.jpg';
import chevdarImage from './images/chevdar.jpg';
import tihonovImage from './images/tihonov.jpg';

export default {
    title: 'Выступления',
    meta: [
        { ['http-equiv']: 'content-language', ['content']: 'ru-RU' },
        { ['name']: 'description', ['content']: 'Записи докладов с конференции от компании СКБ Контур' },
        { ['name']: 'keywords', ['content']: 'видео,технологии,доклад,скб контур' },
    ],
    items: [
        {
            image: volokitinImage,
            speakerFullName: 'Павел Волокитин',
            eventName: 'FrontendFellows',
            title: 'Relay или не Relay',
            dateString: 'январь 2016',
            tags: ['frontend', 'js', 'react'],
            linkToVideo: 'https://www.youtube.com/watch?v=v5Fi-djuwZk',
            linkToSlides: 'http://www.slideshare.net/PavelVolokitin/frontfellows-relay-66758880',
        },
        {
            image: kazakovImage,
            speakerFullName: 'Александр Казаков',
            eventName: 'Codefest',
            title: 'Нетривиальное о репликации: как добиться высокой доступности',
            dateString: 'март 2016',
            tags: ['backend', 'operations'],
            linkToVideo: 'https://www.youtube.com/watch?v=LFpJGGs-kuo',
            linkToSlides: 'http://www.slideshare.net/codefest/ss-60114851',
        },
        {
            image: chevdarImage,
            speakerFullName: 'Игорь Чевдарь',
            eventName: 'DotNext',
            title: 'Кодогенерация для оптимизации',
            dateString: 'июнь 2016',
            tags: ['backend', '.net'],
            linkToVideo: 'https://www.youtube.com/watch?v=X35JVTJV1CE&list=PLtWrKx3nUGBeYn-pSCjEgBPL90SvpylZL&index=7',
            linkToSlides: 'http://public.jugru.org/dotnext/2016/spb/day_1/track_2/chevdar.pdf',
        },
        {
            image: volokitinImage,
            speakerFullName: 'Павел Волокитин',
            eventName: 'WebStandartsDays',
            title: 'Меняем JavaScript с помощью JavaScript',
            dateString: 'июнь 2016',
            tags: ['frontend', 'js'],
            linkToVideo: 'https://www.youtube.com/watch?v=zoq95j3V43g',
            linkToSlides: 'http://www.slideshare.net/PavelVolokitin/javascript-javascript-66759016',
        },
        {
            image: tihonovImage,
            speakerFullName: 'Евгений Тихонов',
            eventName: 'WebStandartsDays',
            title: 'Готовим бизнес-лапшу на React и Redux',
            dateString: 'июнь 2016',
            tags: ['frontend', 'js', 'react'],
            linkToVideo: 'https://www.youtube.com/watch?v=OXsxo4gkqtQ',
            linkToSlides: 'https://reelm.github.io/wsd-2016-slides/wsd-2016-slides.zip',
        },
    ],
};
