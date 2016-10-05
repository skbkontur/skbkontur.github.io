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
                <span>{skbkonturSinceCaption}</span>
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
            </footer>
        </div>
    );
}
