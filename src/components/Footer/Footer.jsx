import React from 'react';
import { Link } from 'react-router';

import cn from './Footer.less';
import Icon from 'retail-ui/components/Icon';

type FooterProps = {
    additionalFooterText?: ?string;
    skbkonturSinceCaption: string;
    lang: string;
};

export default function Footer({ additionalFooterText, skbkonturSinceCaption, lang }: FooterProps) {
    return (
        <noindex>
            <div className={cn('container')}>
                <footer className={cn('footer', 'fixed-width-content')}>
                    {additionalFooterText && (
                        <div className={cn('additional-text')}>
                            {additionalFooterText}
                        </div>
                    )}
                    <div className={cn('footer-main')}>
                        <div className={cn('kontur-logo')} />
                        <span className={cn('since-text')}>{skbkonturSinceCaption}</span>
                        <div className={cn('languages')}>
                            {lang === 'ru'
                                ? [
                                    <Link key='ru' className={cn('active')}>Ru</Link>,
                                    <Link key='en' to='/en'>En</Link>,
                                ]
                                : [
                                    <Link key='ru' to='/'>Ru</Link>,
                                    <Link key='en' className={cn('active')}>En</Link>,
                                ]}
                        </div>
                        <div className={cn('spacer')}/>
                        <a rel='nofollow' className={cn('telegram')} href='https://t.me/KonturTech' target='_blank'>
                            <span className={cn('icon')}><Icon name='telegram-o' /></span>
                            {'\u0020'}
                            <span className={cn('text')}>Канал в Телеграме</span>
                        </a>
                        <a rel='nofollow' className={cn('email')} href='mailto:opensource@skbkontur.ru'>
                            <span className={cn('icon')}><Icon name='envelop' /></span>
                            {'\u0020'}
                            <span className={cn('text')}>opensource@skbkontur.ru</span>
                        </a>
                    </div>
                </footer>
            </div>
        </noindex>
    );
}
