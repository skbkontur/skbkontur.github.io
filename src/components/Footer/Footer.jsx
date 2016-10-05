import React from 'react';
import { Link } from 'react-router';

import cn from './Footer.less';

type FooterProps = {
    skbkonturSinceCaption: string;
    lang: string;
};

export default function Footer({ skbkonturSinceCaption, lang }: FooterProps) {
    return (
        <div className={cn('container')}>
            <footer className={cn('footer', 'fixed-width-content')}>
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
                <a className={cn('email')} href='mailto:opensource@kontur.ru'>
                    <span className={cn('icon')}>{'\u2709'}</span>
                    {'\u0020'}
                    <span className={cn('text')}>opensource@kontur.ru</span>
                </a>
            </footer>
        </div>
    );
}
