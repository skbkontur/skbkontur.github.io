import React from 'react';

export default {
    title: 'Статьи сотрудников компании СКБ Контур',
    meta: {
        keywords: 'статьи',
        description: 'Статьи сотрудников компании СКБ Контур на тематических ресурсах',
    },
    customMetaHeaders: [
        { ['http-equiv']: 'content-language', ['content']: 'ru-RU' },
    ],
    items: [
        {
            speakerFullName: 'Алексей Кирпичников',
            title: 'Moira: Realtime Alerting',
            dateString: 'февраль 2016',
            tags: ['backend', 'operations'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/276403/',
            annotation: (
                <div>
                    <p>
                        Контур делает несколько десятков продуктов, каждый из которых состоит
                        из нескольких десятков микросервисов, каждый из которых запущен на десятках серверов.
                    </p>
                    <p>
                        Эта инфраструктура порождает метрики на всех технологических уровнях —
                        нагрузка на железо, состояние ОС, метрики приложений. Исходные
                        данные собираются в один большой кластер Graphite.
                    </p>
                    <p>
                        Ясно, что за миллионом метрик не уследить глазами на телевизорах и дашбордах —
                        нужна система отправки уведомлений о нештатных ситуациях.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Дмитрий Моисеев',
            title: 'Xamarin и Xamarin.Forms — кактус в шоколаде',
            dateString: 'декабрь 2015',
            tags: ['mobile', 'xamarin'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/273075/',
            annotation: (
                <div>
                    <p>
                        Мы в Контур.Эльбе обожаем мобильные приложения.
                        У нас уже был опыт написания приложения под iOS, а также разработки и
                        дальнейшей поддержки приложения под Android. В этом году мы вновь выпустили
                        версию под iOS, но на этот раз на базе <strong>Xamarin</strong> и <strong>Xamarin.Forms</strong>, и нам не
                        терпится поделиться опытом. Пока что мы успели рассмотреть разработку только
                        под iOS, но впечатлений уже море, да и про Android пару слов однозначно скажем.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: '',
            title: 'QCTF Starter: компьютерная безопасность на четверых или как мы сделали турнир для новичков в 19 городах одновременно',
            dateString: 'ноябрь 2015',
            tags: ['security', 'ctf'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/271909/',
            annotation: (
                <div>
                    <p>
                        CTF-соревнования знакомы многим, ещё больше людей о них хотя бы раз слышали.
                        Про них <a href='https://habrahabr.ru/post/64216/'>тут</a> хорошо написано. Чтобы участвовать в серьёзных
                        CTF-турнирах нужна неслабая подготовка, но мало кто знает, как и где её получить.
                        Мы решили исправить это, а именно — провести массовые соревнования по компьютерной
                        безопасности для новичков. И назвали их QCTF Starter. Возможно, для участников
                        это станет первой ступенькой на пути к профессиональным CTF-турнирам.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Дмитрий Моисеев',
            title: 'Долгая дорога в App Store, или как потратить 43 дня на премодерацию приложения',
            dateString: 'октябрь 2015',
            tags: ['mobile', 'distribution'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/268373/',
            annotation: (
                <div>
                    <p>
                        В прошлом году мы рассказывали про разработку приложения Контур.Эльба под Android
                        (причем неоднократно). Реализовав в нем все задуманное, мы принялись за
                        разработку версии под iOS, которая недавно появилась в App Store.
                        Пост про разработку с использованием Xamarin.Forms будет позже,
                        а пока сосредоточимся на, казалось бы, банальном вопросе: выкладывание приложения
                        в App Store и общение с модераторами.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Игорь Чевдарь',
            title: 'Быстрая и удобная генерация IL',
            dateString: 'июль 2015',
            tags: ['backend', '.net'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/262711/',
            annotation: (
                <div>
                    <p>
                        Я много раз сталкивался с задачей динамической генерации кода
                        (например, при написании эффективного сериализатора или компилятора DSL).
                        Это можно делать разными способами, какой из них лучший — дискуссия для отдельной
                        статьи. По ряду причин я предпочитаю Reflection.Emit и CIL (Common Intermediate Language)
                        и расскажу, с какими проблемами пришлось столкнуться на этом пути, а также об
                        их решении: умной обертке над ILGenerator — GroboIL из библиотеки Graceful Emit.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Павел Егоров',
            title: 'Почему я не преподаю SOLID и «принцип устранения зависимостей» (перевод)',
            dateString: 'июнь 2015',
            tags: ['backend', 'architecture'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/260781/',
            annotation: (
                <div>
                    <p>
                        Если вы разговариваете с кем-то, кому небезразлично качество кода, уже достаточно скоро в
                        разговоре всплывёт SOLID — аббревиатура, помогающая разработчикам запомнить пять важных
                        принципов объектно-ориентированного программирования.
                    </p>
                    <p>
                        SOLID полезен. Его разработали знатоки в нашей области. Он помогает людям рассуждать о дизайне.
                        Помогает создавать системы, устойчивые к изменениям.
                    </p>
                    <p>
                        Раньше SOLID был краеугольным камнем моего набора средств проектирования. Я делал все
                        возможное, чтобы сделать мой код как можно более SOLID. Я учил других поступать так же.
                    </p>
                    <p>
                        Сегодня SOLID остается для меня важным, но я больше не пытаюсь сделать мой код SOLID. Я редко
                        упоминаю его, когда говорю про дизайн. И тем более я не учу пользоваться им разработчиков,
                        которым хочется почерпнуть хорошие дизайнерские методы проектирования. Он больше не находится
                        у меня под рукой в моем «ящике для инструментов». Он лежит в пыльной коробке на чердаке.
                        Я храню его, потому что он важен, но редко им пользуюсь.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Петр Гусев',
            title: 'Simple container',
            dateString: 'январь 2015',
            tags: ['backend', '.net'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/248585/',
            annotation: (
                <div>
                    <p>
                        Да-да, вы все правильно поняли, это статья об еще одном велосипеде — о
                        моем <a href='http://en.wikipedia.org/wiki/Dependency_injection'>Dependency Injection</a> (DI)
                        контейнере. За окном уже 2015-ый год, и самых разных контейнеров на любой вкус и цвет полным
                        полно. Зачем может понадобиться еще один?
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Дмитрий Моисеев',
            title: 'Делаем собственную индикацию о входящем звонке',
            dateString: 'ноябрь 2014',
            tags: ['mobile'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/243063/',
            annotation: (
                <div>
                    <p>
                        После последнего поста о <a href='http://habrahabr.ru/company/skbkontur/blog/234241/'>нашем
                        Android-приложении</a> у некоторых читателей статьи возник вопрос, как именно показать
                        собственную информационную плашку во время звонка? Ну что же, сегодня мы ответим на этот вопрос.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Дмитрий Моисеев',
            title: 'Экспортируем комментарии и оценки из Google Play для анализа',
            dateString: 'сентябрь 2014',
            tags: ['mobile'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/236939/',
            annotation: (
                <div>
                    <p>
                        Не все знают, но в Google Play существует вполне легальная возможность выгрузить все комментарии
                        и оценки к своему приложению в отдельный CSV-файл, после чего заняться каким-нибудь анализом,
                        не доступном из гугловской системы. Но делается это с помощью внешней утилиты gsutil,
                        написанной на Python’е. Так что в этом посте будет небольшая инструкция по тому, как это сделать.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Дмитрий Моисеев',
            title: 'Контур.Эльба под Android. Записки разработчика',
            dateString: 'август 2014',
            tags: ['mobile'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/234241/',
            annotation: (
                <div>
                    <p>
                        В конце прошлого года я присоединился к команде веб-сервиса Эльба, и мы приступили к разработке
                        «электронного бухгалтера» для Android.
                    </p>
                    <p>
                        В этом посте я расскажу о том, почему мы отказались от мобильной версии сайта в пользу
                        приложений, на какие грабли в процессе разработки наступили и что из этого получилось.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Андрей Гейн',
            title: 'Как мы фирмы российские исследовали',
            dateString: 'март 2014',
            tags: ['backend'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/214653/',
            annotation: (
                <div>
                    <p>
                        Возможно, вы слышали о Контуре как о компании, разрабатывающей продукты для малого и среднего
                        бизнеса. Но наше подразделение занимается совершенно другим. Или, если сказать точнее, подходит
                        к этому с другой стороны. Мы называемся «Контур Лабс» и занимаемся научными и исследовательскими
                        проектами.
                    </p>
                    <p>
                        Что вы делаете, если у вас есть несколько десятков гигабайт данных? Мы в первую очередь
                        стараемся эти данные каким-то образом нарисовать — кажется, в визуальном отображении могут
                        проявиться связи, которые не были видны непосредственно.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Павел Егоров',
            title: 'Выездная школа программирования: что можно сделать со студентами за три дня в тёмном лесу',
            dateString: 'февраль 2014',
            tags: ['education'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/211729/',
            annotation: (
                <div>
                    <p>
                        На просторах интернета несложно найти целое множество статей про современное образование, про
                        несоответствие знаний выпускников ИТ-специальностей и требований к ним у компаний, про то, как
                        всё плохо и как всё надо изменить.
                    </p>
                    <p>
                        В этой статье мы расскажем про нашу попытку перейти от разговоров к реальным делам. У нас нет
                        ресурсов, чтобы изменить ситуацию глобально, поэтому мы действуем точечно. Выездная школа по
                        программированию — это возможность выправить ситуацию, воздействуя на наиболее способных студентов.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Дмитрий Моисеев',
            title: 'Настройка TeamCity для новичков',
            dateString: 'декабрь 2013',
            tags: ['backend', 'teamcity'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/205402/',
            annotation: (
                <div>
                    <p>
                        Эта статья в первую очередь пригодится тем, кто использует тот же стек технологий, что и наша
                        команда, а именно: ASP.NET, C#, NUnit, Selenium 2, git, MSBuild. Будут рассмотрены такие задачи,
                        как интеграция с git, сборка C#-проектов, NUnit-тесты (как модульные, так и тесты UI), а также
                        деплой на сервер. Впрочем, наверняка найдётся интересное и для других пользователей, кроме разве
                        что съевших на этом вопросе собаку. Но они опять же смогут обратить внимание на ошибки в статье
                        или что-то посоветовать: например, как оптимизировать фазу деплоя.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Елена Махно',
            title: 'Юзабилити: прямо здесь и сейчас',
            dateString: 'август 2013',
            tags: ['design', 'usability'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/189916/',
            annotation: (
                <div>
                    <p>
                        Юзабилити-специалист нужен всем: большим IT-компаниям и маленьким стартапам. О том, как обычно
                        выстроен процесс работы юзабилиста в больших компаниях, на хабре писалось уже не раз. А тему
                        «как взять и прямо сейчас организовать работу внутри вашей команды» (пусть и небольшой)
                        почему-то все время обходили стороной.
                    </p>
                    <p>
                        Мы решили заполнить эту брешь. Не смотря на то,
                        что <a href='http://b-kontur.ru/'>Бухгалтерия.Контур</a> (ранее Эльба) — проект большой компании,
                        мы всегда старались воссоздать внутри команды атмосферу стартапа. Поэтому проблемы и нюансы работы
                        в небольшой команде — понимаем хорошо.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Андрей Лапин',
            title: 'Архитектура высоконагруженной системы Диадок',
            dateString: 'апрель 2013',
            tags: ['backend', 'architecture'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/175871/',
            annotation: (
                <div>
                    <p>
                        Те, кто интересуется highload-системами, читали про архитектуры Twitter, Facebook и прочие
                        другие. Но никогда еще не было публикаций о системах такого класса, как Диадок. В отличие от
                        Twitter, эта система не является бесплатной и доступной всем и содержит довольно большой слой
                        бизнес-логики, предназначенной для решения задач из конкретной предметной области.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Илья Бублик',
            title: 'Кроссбраузерный запуск «злобного» кода на клиенте',
            dateString: 'октябрь 2011',
            tags: ['frontend', 'security'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/131552/',
            annotation: (
                <div>
                    <p>
                        Пост будет интересен веб-разработчикам, заинтересованным в запуске небезопасного кода на клиенте
                        (из браузера). Под «злобным» мы понимаем код, который мы не можем выполнить в чистом JavaScript’е
                        (в нашем случае — подписание куска данных определенным сертификатом).
                    </p>
                    <p>
                        Моя команда занимается разработкой интернет-сервиса для расчета зарплаты. Перед нами встала
                        задача подписать отправляемую отчетность закрытым ключом клиента, следовательно, нужно выполнить
                        на машине клиента опасный с точки зрения браузера код. При этом очень хотелось не ограничивать
                        клиента в выборе браузера для пользования нашим сервисом.
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Евгений Кобзев',
            title: 'Как перестать беспокоиться и начать работать?',
            dateString: 'сентябрь 2011',
            tags: ['backend'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/128427/',
            annotation: (
                <div>
                    <p>
                        В <a href='http://habrahabr.ru/blogs/agile/105008/'>прошлый раз</a>, когда мы рассказывали о
                        работе <a href='http://www.e-kontur.ru/'>нашей</a> команды, многих интересовали подробности
                        организации работы непосредственно разработчиков, о чём мы сейчас и расскажем. Не стоит ожидать
                        «срывов покровов» и открытий, ведь всё, что делают разработчики ни раз описывалось и обсуждалось,
                        но то, что мы делаем в совокупности в реальных крупных проектах, делается не так уж часто (честно
                        говоря, я этого вообще больше нигде не видел). То есть ожидать-то не стоит, но «срывы покровов» произойдут :)
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Евгений Кобзев',
            title: 'Как вставить печать в документ, чтобы боги не убили котёнка',
            dateString: 'июнь 2011',
            tags: ['backend'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/123089/',
            annotation: (
                <div>
                    <p>
                        Была у пользователей Эльбы мечта — вставлять изображения печатей и подписей в счета, акты,
                        накладные и прочие серьезные документы. Отчего бы не порадовать мечтателей, подумали мы.
                        Оглядевшись по сторонам, мы поняли, что обычно в таких случаях всю грязную работу сваливают
                        на пользователя (ну, вы знаете: «картинка должна быть 300 на 400 пикселей, с высоким контрастом,
                        хорошим разрешением и идеально белым фоном»). Но судя по опыту нашей команды, которая бывает в
                        колл-центре, даже простая загрузка изображения с фотоаппарата повергает пользователей в глубокую
                        депрессию, и вызволять их приходится богопротивными способами, а-ля «вставьте картинку в Ворд».
                        Конечно, не может быть и речи о том, чтобы заставлять пользователей чистить печати в фотошопах —
                        пусть фотографируют как умеют, а Эльба выполнит за них все остальное!
                    </p>
                </div>
            ),
        },
        {
            speakerFullName: 'Евгений Кобзев',
            title: 'Регистрация приложения в AppStore — мы сделали это!',
            dateString: 'февраль 2011',
            tags: ['mobile', 'distribution'],
            linkToSlides: 'https://habrahabr.ru/company/skbkontur/blog/113824/',
            annotation: (
                <div>
                    <p>
                        Сегодня <a href='http://e-kontur.ru/'>мы</a> не будем рассказывать о том, как правильно платить
                        налоги и отправлять декларации через интернет — про это мы расскажем как-нибудь в следующих публикациях.
                    </p>
                    <p>
                        Вместо этого мы поделимся нашим опытом проникновения в AppStore. Ежедневно в него попадают тысячи
                        приложений, в карманы разработчиков (и Apple) текут зелёные реки хрустящих бумажек, а в программе
                        разработчиков iOS developer регистрируются сотни новых программистов и компаний. Растущая
                        популярность платформы iOS подтолкнула нас к мысли — почему бы не написать собственное
                        приложение для iPhone? Кстати, наше приложение совершенно бесплатное :)
                    </p>
                </div>
            ),
        },
    ],
};
