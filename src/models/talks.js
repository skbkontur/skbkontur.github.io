import React from 'react';

import ahmetovImage from 'talks-image-responsive!./images/talks/ahmetov.jpg';
import baranovaImage from 'talks-image-responsive!./images/talks/baranova.jpg';
import burmistrovImage from 'talks-image-responsive!./images/talks/burmistrov.jpg';
import chevdarImage from 'talks-image-responsive!./images/talks/chevdar.jpg';
import chicherskyImage from 'talks-image-responsive!./images/talks/chichersky.png';
import dashkevichImage from 'talks-image-responsive!./images/talks/dashkevich.jpg';
import egorovImage from 'talks-image-responsive!./images/talks/egorov.jpg';
import geinImage from 'talks-image-responsive!./images/talks/gein.png';
import golubevImage from 'talks-image-responsive!./images/talks/golubev.png';
import kazakovImage from 'talks-image-responsive!./images/talks/kazakov.jpg';
import khruschevImage from 'talks-image-responsive!./images/talks/khruschev.jpg';
import kirpichnikovImage from 'talks-image-responsive!./images/talks/kirpichnikov.jpg';
import kokovinImage from 'talks-image-responsive!./images/talks/kokovin.jpg';
import konovalovImage from 'talks-image-responsive!./images/talks/konovalov.png';
import kurpilanskyImage from 'talks-image-responsive!./images/talks/kurpilansky.png';
import kutovoiImage from 'talks-image-responsive!./images/talks/kutovoi.png';
import larkovImage from 'talks-image-responsive!./images/talks/larkov.jpg';
import moiseevImage from 'talks-image-responsive!./images/talks/moiseev.png';
import musinaImage from 'talks-image-responsive!./images/talks/musina.png';
import plinerImage from 'talks-image-responsive!./images/talks/pliner.jpg';
import ratkinImage from 'talks-image-responsive!./images/talks/ratkin.png';
import romanovskyImage from 'talks-image-responsive!./images/talks/romanovsky.png';
import ronzhinaImage from 'talks-image-responsive!./images/talks/ronzhina.png';
import safarovImage from 'talks-image-responsive!./images/talks/safarov.png';
import shaihutdinovImage from 'talks-image-responsive!./images/talks/shaihutdinov.png';
import sobolevaeImage from 'talks-image-responsive!./images/talks/sobolevae.jpg';
import sobolevaoImage from 'talks-image-responsive!./images/talks/sobolevao.png';
import solovievImage from 'talks-image-responsive!./images/talks/soloviev.jpg';
import tihonovImage from 'talks-image-responsive!./images/talks/tihonov.jpg';
import vdovichenkoImage from 'talks-image-responsive!./images/talks/vdovichenko.png';
import volokitinImage from 'talks-image-responsive!./images/talks/volokitin.jpg';

// 2012 conference archives
const sqa2012Link = 'http://sqadays.com/ru/talks/7995';

// 2013 conference archives
const dump2013Link = 'http://dump-it.ru/arhiv/itogi-dump-2013/';
const tadEkb2013Link = 'http://www.teamlead.ru/display/MAIN/TAD+4-2013+Ekaterinburg';

// 2014 conference archives
const dump2014Link = 'http://dump-conf.ru/archive/2014/';

// 2015 conference archives
const dump2015Link = 'http://dump-conf.ru/archive/2015/';
const secr2015Link = 'http://2015.secr.ru/';

// 2016 conference archives
const codefest2016Link = 'http://2016.codefest.ru/';
const dotnextPiter2016Link = 'http://2016.dotnext-piter.ru';
const dump2016Link = 'http://dump-conf.ru/archive/2016/';
const wsdEkb2016Link = 'https://wsd.events/2016/06/25/';

// conference and meetup archives without dates
const dotnetEkbLink = 'https://vk.com/dotnetekb';

export default {
    additionalFooterText:
        <noindex>
            Фотографии докладчиков взяты из видео выступлений и фотоархивов соответствующих конференций. Рядом с каждым выступлением есть
            ссылка на сайт конференции, который является источником фотографии.
        </noindex>,
    title: 'Выступления и доклады сотрудников компании СКБ Контур',
    meta: {
        keywords: 'выступления, доклады, презентации, скб контур, скб-контур, контур, видео, презентации',
        description: 'Выступления и доклады сотрудников компании СКБ Контур на конференциях c видео и презентациями',
    },
    customMetaHeaders: [
        { ['http-equiv']: 'content-language', ['content']: 'ru-RU' },
    ],
    items: [
        {
            image: chicherskyImage,
            speakerFullName: 'Александр Чичерский',
            eventName: '.NET meetup Екб',
            title: 'Асинхронность в NET или Потока нет!',
            dateString: 'июнь 2016',
            tags: ['backend', '.net'],
            linkToVideo: 'https://www.youtube.com/watch?v=XfU8h9CcZV8',
            linkToSlides: 'https://vk.com/doc1499661_437572111?hash=34eeb78055874fbe52&dl=edc0d29dddaae429eb',
            linkToEvent: dotnetEkbLink,
        },
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
            linkToEvent: codefest2016Link,
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
            linkToEvent: dotnextPiter2016Link,
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
            linkToEvent: wsdEkb2016Link,
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
            linkToEvent: wsdEkb2016Link,
        },
        {
            image: burmistrovImage,
            speakerFullName: 'Иван Бурмистров',
            eventName: 'Cassandra Summit',
            title: 'Digging Cassandra cluster',
            dateString: 'сентябрь 2015',
            tags: ['backend', 'db', 'cassandra'],
            linkToVideo: 'https://www.youtube.com/watch?v=t6utdWssBOM',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQX1FvSlgtaUtscFE',
        },
        {
            image: egorovImage,
            speakerFullName: 'Павел Егоров',
            eventName: 'SECR',
            title: 'Почему вам стоит организовать свою ИТ-конференцию и как это сделать',
            dateString: 'октябрь 2015',
            tags: ['management', 'education'],
            linkToVideo: 'http://0x1.tv/20151022BG',
            linkToSlides: 'http://0x1.tv/20151022BG',
            linkToEvent: secr2015Link,
        },
        {
            image: kazakovImage,
            speakerFullName: 'Александр Казаков',
            eventName: 'DUMP',
            title: 'Профилирование распределенных систем',
            dateString: 'апрель 2016',
            tags: ['backend', 'operations'],
            linkToVideo: 'https://www.youtube.com/watch?v=EpDgUZWjGLc&index=6&list=PLRdS-n5seLRriePAvTXvkl8mE20gPeDIp',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQY1Bpdi1PTndhOXc',
            linkToEvent: dump2016Link,
        },
        {
            image: larkovImage,
            speakerFullName: 'Алексей Ларьков',
            eventName: 'DUMP',
            title: 'Moira: Realtime alerting',
            dateString: 'апрель 2016',
            tags: ['backend', 'operations'],
            linkToVideo: 'https://www.youtube.com/watch?v=_MJdtHbiXPE&index=5&list=PLRdS-n5seLRriePAvTXvkl8mE20gPeDIp',
            linkToSlides: 'https://drive.google.com/file/d/0B-qtqQ5D71UQQVcwUEpybmpIZVE/view?usp=drivesdk',
            linkToEvent: dump2016Link,
        },
        {
            image: ronzhinaImage,
            speakerFullName: 'Анастасия Ронжина',
            eventName: 'DUMP',
            title: 'Cообщество тестировщиков Екатеринбурга',
            dateString: 'апрель 2016',
            tags: ['testing'],
            linkToVideo: 'https://www.youtube.com/watch?v=-4zAc7kWAhc&index=5&list=PLRdS-n5seLRoMRdNO1k1FeFeBMgBRRX6j',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQRmF5dHVuWU8tYlU',
            linkToEvent: dump2016Link,
        },
        {
            image: ratkinImage,
            speakerFullName: 'Кирилл Раткин',
            eventName: 'DUMP',
            title: 'Планирование развития автотестов',
            dateString: 'апрель 2016',
            tags: ['testing'],
            linkToVideo: 'https://www.youtube.com/watch?v=4yrWt_b835k&index=4&list=PLRdS-n5seLRoMRdNO1k1FeFeBMgBRRX6j',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQSHRBaGhKVjRhMkE',
            linkToEvent: dump2016Link,
        },
        {
            image: golubevImage,
            speakerFullName: 'Александр Голубев',
            eventName: 'DUMP',
            title: 'Адаптация команды после увольнения сотрудников',
            dateString: 'апрель 2016',
            tags: ['management', 'hr'],
            linkToVideo: 'https://www.youtube.com/watch?v=pL6AFI5GpqM&index=3&list=PLRdS-n5seLRrEr-0A2koGR1a2tM9dM0an',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQQkxlNXRPZTFjRTA',
            linkToEvent: dump2016Link,
        },
        {
            image: moiseevImage,
            speakerFullName: 'Дмитрий Моисеев',
            eventName: 'DUMP',
            title: 'Xamarin: кроссплатформенные грабли',
            dateString: 'апрель 2016',
            tags: ['mobile', 'xamarin'],
            linkToVideo: 'https://www.youtube.com/watch?v=Ktc7ns2Z2Rw&index=6&list=PLRdS-n5seLRrSqdcVMqQge9YRcQztqgbO',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQcmRKOHVUU0E2Uzg',
            linkToEvent: dump2016Link,
        },
        {
            image: konovalovImage,
            speakerFullName: 'Никита Коновалов, Юлия Петрунина',
            eventName: 'DUMP',
            title: 'Тернистый путь принятия решений',
            dateString: 'март 2015',
            tags: ['design'],
            linkToVideo: 'https://www.youtube.com/watch?v=KB48F8s7jzY&index=3&list=PLRdS-n5seLRrEb91BeyQfcRJCOwb7issv',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2015-46259341',
            linkToEvent: dump2015Link,
        },
        {
            image: sobolevaeImage,
            speakerFullName: 'Эльвира Соболева',
            eventName: 'DUMP',
            title: 'Тестировщик в роли менеджера итерации',
            dateString: 'март 2015',
            tags: ['testing'],
            linkToVideo: 'https://www.youtube.com/watch?v=qyJ4Uf0FmGE&list=PLRdS-n5seLRp_rmnC69UpyhiPpo1tRYLv&index=3',
            linkToSlides: 'http://www.slideshare.net/it-people/ss-46260346',
            linkToEvent: dump2015Link,
        },
        {
            image: vdovichenkoImage,
            speakerFullName: 'Антон Вдовиченко',
            eventName: 'DUMP',
            title: 'Как тестировщик мануалы писал',
            dateString: 'март 2015',
            tags: ['testing'],
            linkToVideo: 'https://www.youtube.com/watch?v=FtPX19c76l8&list=PLRdS-n5seLRp_rmnC69UpyhiPpo1tRYLv&index=2',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2015-46260163',
            linkToEvent: dump2015Link,
        },
        {
            image: egorovImage,
            speakerFullName: 'Павел Егоров',
            eventName: 'DUMP',
            title: 'Обучение разработчиков?!! Я думал они как-нибудь сами...',
            dateString: 'март 2015',
            tags: ['management', 'education'],
            linkToVideo: 'https://www.youtube.com/watch?v=80YK0oqJhC4&list=PLRdS-n5seLRrR2gBuM7Kt1yIizNGIrnM9&index=6',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2015-46489805',
            linkToEvent: dump2015Link,
        },
        {
            image: kirpichnikovImage,
            speakerFullName: 'Алексей Кирпичников',
            eventName: 'DUMP',
            title: 'Свежие новости из мира слабо полностью антисимметричных квазигрупп десятого порядка',
            dateString: 'март 2015',
            tags: ['science', 'math'],
            linkToVideo: 'https://www.youtube.com/watch?v=cwKnHHRutUs&index=6&list=PLRdS-n5seLRp6nwfAcqo7DTXta5GcclMq',
            linkToSlides: 'http://www.slideshare.net/it-people/ss-k',
            linkToEvent: dump2015Link,
        },
        {
            image: burmistrovImage,
            speakerFullName: 'Иван Бурмистров, Александр Казаков, Иван Дашкевич',
            eventName: 'DUMP',
            title: 'Микросервисная архитектура в теории и на практике',
            dateString: 'март 2015',
            tags: ['backend', 'architecture'],
            linkToVideo: 'https://www.youtube.com/watch?v=LDTa2Nx5qrw&list=PLRdS-n5seLRpIYtTllDAneJivR5Xea3nQ&index=6',
            linkToSlides: 'https://drive.google.com/file/d/0B-qtqQ5D71UQam9KbUlrOFFzWTQ/view?usp=sharing',
            linkToEvent: dump2015Link,
        },
        {
            image: khruschevImage,
            speakerFullName: 'Михаил Хрущев',
            eventName: 'DUMP',
            title: 'Сайты в Фокусе',
            dateString: 'март 2015',
            tags: ['backend'],
            linkToVideo: 'https://www.youtube.com/watch?v=tZ7wYPXhQh8&list=PLRdS-n5seLRpIYtTllDAneJivR5Xea3nQ&index=2',
            linkToSlides: 'http://prezi.com/9ivkpl5qwtxx/',
            linkToEvent: dump2015Link,
        },
        {
            image: dashkevichImage,
            speakerFullName: 'Иван Дашкевич, Иван Бурмистров, Павел Егоров',
            eventName: 'DUMP',
            title: 'Почему из нас не получилось хороших тимлидов',
            dateString: 'март 2014',
            tags: ['management'],
            linkToVideo: 'https://www.youtube.com/watch?v=Fhd0L-cyp_s&list=PLRdS-n5seLRqJ-4fDXACGDMTz5JJH_gKy&index=4',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2014-34282193',
            linkToEvent: dump2014Link,
        },
        {
            image: kazakovImage,
            speakerFullName: 'Александр Казаков',
            eventName: 'DUMP',
            title: 'О хранилище «Зебра»',
            dateString: 'май 2013',
            tags: ['backend', 'db', 'zebra'],
            linkToVideo: 'https://www.youtube.com/watch?v=8dvRoLPvCuo&list=PLRdS-n5seLRpVRDblg0KDFr5V4RlvaDiR&index=35',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2013-serverside',
            linkToEvent: dump2013Link,
        },
        {
            image: egorovImage,
            speakerFullName: 'Павел Егоров',
            eventName: 'Семинар IT-people',
            title: 'Введение в машинное обучение',
            dateString: 'декабрь 2012',
            tags: ['science', 'machine learning'],
            linkToVideo: 'https://www.youtube.com/watch?v=qzs0rJscOxg&index=2&list=PLRdS-n5seLRoCss8j5S-M50hH0HhoPiSo',
            linkToSlides: 'http://www.slideshare.net/xoposhiy/oseminar-2012',
        },
        {
            image: tihonovImage,
            speakerFullName: 'Евгений Тихонов',
            eventName: 'CassandraConf',
            title: 'Введение в Cassandra',
            dateString: 'декабрь 2013',
            tags: ['backend', 'db', 'cassandra'],
            linkToVideo: 'https://www.youtube.com/watch?v=ByoMdUB8iyI&list=PLEbtM8n7mz93h4VRGBc3SabsAHJCcjdzx&index=9',
            linkToSlides: 'https://yadi.sk/i/AIMcMN9XwgugQ',
        },
        {
            image: burmistrovImage,
            speakerFullName: 'Иван Бурмистров',
            eventName: 'CassandraConf',
            title: 'Строго ориентированная последовательность временных событий',
            dateString: 'декабрь 2013',
            tags: ['backend', 'db', 'cassandra'],
            linkToVideo: 'https://www.youtube.com/watch?v=M_rIdjpybH4&index=11&list=PLEbtM8n7mz93h4VRGBc3SabsAHJCcjdzx',
            linkToSlides: 'https://drive.google.com/open?id=0B-qtqQ5D71UQU1J5bDhtaEpOV1E',
        },
        {
            image: geinImage,
            speakerFullName: 'Андрей Гейн',
            eventName: 'DUMP',
            title: 'Что мы делали с большими графами, чтобы на них было интересно смотреть',
            dateString: 'март 2014',
            tags: ['science', 'math'],
            linkToVideo: 'https://www.youtube.com/watch?v=DWm5pPSFA_Y&list=PLRdS-n5seLRoUXuEiUfbuvwDpvLtdsz_q&index=2',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2014-32925064',
            linkToEvent: dump2014Link,
        },
        {
            image: kutovoiImage,
            speakerFullName: 'Владимир Кутовой',
            eventName: 'DUMP',
            title: 'Keep Calm',
            dateString: 'март 2014',
            tags: ['design', 'ui'],
            linkToVideo: 'https://www.youtube.com/watch?v=1mlHf0hNiUA&index=5&list=PLRdS-n5seLRq-L42Z42xb-uW2iGotkDWU',
            linkToSlides: 'https://drive.google.com/file/d/0B-qtqQ5D71UQVXYzTUhnZjhCeFE/view?usp=drivesdk',
            linkToEvent: dump2014Link,
        },
        {
            image: plinerImage,
            speakerFullName: 'Лев Плинер',
            eventName: 'DUMP',
            title: '30 спартанцев: как совершить подвиг и не потерять команду',
            dateString: 'март 2014',
            tags: ['management', 'hr'],
            linkToVideo: 'https://www.youtube.com/watch?v=fFfTVAGoDTM&list=PLRdS-n5seLRqJ-4fDXACGDMTz5JJH_gKy&index=2',
            linkToSlides: 'https://drive.google.com/file/d/0B-qtqQ5D71UQYTdBd290eVJRTFE/view?usp=sharing',
            linkToEvent: dump2014Link,
        },
        {
            image: kokovinImage,
            speakerFullName: 'Александр Коковин',
            eventName: 'DUMP',
            title: 'Распределенный консенсус',
            dateString: 'март 2014',
            tags: ['backend', 'algorithms'],
            linkToVideo: 'https://www.youtube.com/watch?v=uiEMqEl10Ps&list=PLRdS-n5seLRp0KOpGrpnBNFRmd8K-RPTC&index=6',
            linkToSlides: 'https://drive.google.com/file/d/0B-qtqQ5D71UQM2NzWE5kWXI2SFk/view?usp=drivesdk',
            linkToEvent: dump2014Link,
        },
        {
            image: ahmetovImage,
            speakerFullName: 'Александр Ахметов',
            eventName: 'DUMP',
            title: 'Когда тесты пишут разработчики',
            dateString: 'март 2014',
            tags: ['testing'],
            linkToVideo: 'https://www.youtube.com/watch?v=tnEyjppqufk&list=PLRdS-n5seLRoTw3SB8oPRBrbgDiRPWLdi',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2014-32925242',
            linkToEvent: dump2014Link,
        },
        {
            image: baranovaImage,
            speakerFullName: 'Анна Баранова',
            eventName: 'DUMP',
            title: 'Геймификация как метод управления',
            dateString: 'май 2013',
            tags: ['management'],
            linkToVideo: 'https://www.youtube.com/watch?v=eTybEGIE1QE&list=PLRdS-n5seLRpVRDblg0KDFr5V4RlvaDiR&index=14',
            linkToSlides: 'https://drive.google.com/file/d/0B-qtqQ5D71UQZndQSTFDNjlVdm8/view?usp=drivesdk',
            linkToEvent: dump2013Link,
        },
        {
            image: solovievImage,
            speakerFullName: 'Сергей Соловьев, Николай Чуприянов',
            eventName: 'DUMP',
            title: '武士道: путь воина в проектировании интерфейсов',
            dateString: 'май 2013',
            tags: ['design', 'ui'],
            linkToVideo: 'https://www.youtube.com/watch?v=87lDgRxqTjY&index=27&list=PLRdS-n5seLRpVRDblg0KDFr5V4RlvaDiR',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2013-22373283',
            linkToEvent: dump2013Link,
        },
        {
            image: shaihutdinovImage,
            speakerFullName: 'Рамиль Шайхутдинов',
            eventName: 'DUMP',
            title: '«Дом качества» как инструмент анализа пользовательского опыта',
            dateString: 'май 2013',
            tags: ['design', 'ui'],
            linkToVideo: 'https://www.youtube.com/watch?v=Wmq7K1R-E8M&index=22&list=PLRdS-n5seLRpVRDblg0KDFr5V4RlvaDiR',
            linkToSlides: 'http://www.slideshare.net/it-people/dump2013-22088665',
            linkToEvent: dump2013Link,
        },
        {
            image: romanovskyImage,
            speakerFullName: 'Евгений Романовский',
            eventName: 'Семинар IT-people',
            title: 'Опыт работы с фреймворком ASP.NET MVC',
            dateString: 'июнь 2013',
            tags: ['backend', '.net', 'asp'],
            linkToVideo: 'https://www.youtube.com/watch?v=As4pSEyN_7A&index=2&list=PLRdS-n5seLRpbtx-l9gXedNN3QC2wnukE',
            linkToSlides: 'https://1drv.ms/p/s!AulBT7iBDr036wCPYI-H0Zp7vtPT',
        },
        {
            image: safarovImage,
            speakerFullName: 'Эльдар Сафаров',
            eventName: 'Teamlead Atlassian Day',
            title: 'От WackoWiki к Confluence',
            dateString: 'апрель 2013',
            tags: ['management'],
            linkToVideo: 'https://www.youtube.com/watch?v=c92vn7EN76k',
            linkToSlides: 'http://www.slideshare.net/teamlead/teamlead-atlassian-day-42013-wacko-wiki-mediawiki-confluence',
            linkToEvent: tadEkb2013Link,
        },
        {
            image: musinaImage,
            speakerFullName: 'Анастасия Мусина',
            eventName: 'ConfeT&QA',
            title: 'Не закручивайте гайки!',
            dateString: 'октябрь 2013',
            tags: ['testing'],
            linkToVideo: 'https://www.youtube.com/watch?v=VCIqpKLhRlo',
        },
        {
            image: musinaImage,
            speakerFullName: 'Анастасия Мусина',
            eventName: 'SQA Days',
            title: 'Как заводить баги понятно всем',
            dateString: 'апрель 2012',
            tags: ['testing'],
            linkToVideo: 'https://vimeo.com/42271611',
            linkToSlides: 'http://www.slideshare.net/VLDCORP/ss-12686469',
            linkToEvent: sqa2012Link,
        },
        {
            image: kurpilanskyImage,
            speakerFullName: 'Евгений Курпилянский',
            eventName: 'CassandraConf',
            title: 'Индексирование поверх Cassandra',
            dateString: 'декабрь 2013',
            tags: ['backend', 'db', 'cassandra'],
            linkToVideo: 'https://www.youtube.com/watch?v=ljcZVZGnM2I&index=6&list=PLEbtM8n7mz93h4VRGBc3SabsAHJCcjdzx',
        },
        {
            image: kokovinImage,
            speakerFullName: 'Сычев Максим, Коковин Александр',
            eventName: 'CassandraConf',
            title: 'Как мы переезжали на Cassandra',
            dateString: 'декабрь 2013',
            tags: ['backend', 'db', 'cassandra'],
            linkToVideo: 'https://www.youtube.com/watch?v=9iOBQPDvIgY&list=PLEbtM8n7mz93h4VRGBc3SabsAHJCcjdzx&index=7',
            linkToSlides: 'http://www.slideshare.net/it-people/cassandraconf2',
        },
        {
            image: sobolevaoImage,
            speakerFullName: 'Соболева Ольга, Иванов Кирилл',
            eventName: 'CassandraConf',
            title: 'Обработка транзакций на примере телекоммуникационной компании',
            dateString: 'декабрь 2013',
            tags: ['backend', 'db', 'cassandra'],
            linkToVideo: 'https://www.youtube.com/watch?v=BacY43GELrM&index=12&list=PLEbtM8n7mz93h4VRGBc3SabsAHJCcjdzx',
        },
    ],
};
