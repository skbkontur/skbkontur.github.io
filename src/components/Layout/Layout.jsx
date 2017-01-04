// @flow
import React from 'react';
import cn from './Layout.less';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

const Hammer = typeof document !== 'undefined' ? require('hammerjs') : undefined;

import Footer from '../Footer/Footer';
import appleTouchIcons from './apple-touch-icons';
import logoSocialImage from '../../images/logo-social.png';

if (Hammer) {
    delete Hammer.defaults.cssProps.userSelect;
}

type LayoutState = {
    menuOpened: boolean;
}

type LayoutMeta = {
    lang: string;
    skbkonturSinceCaption: string;
    pageTitle: string;
    titleTemplate: string;
    menu: {
        href: string;
        caption: string;
    }[];
};

type LayoutProps = {
    title: string;
    additionalFooterText?: string;
    route: { layout: LayoutMeta };
    children: ?any;
    content: any;
}

export default class Layout extends React.Component {
    props: LayoutProps;
    state: LayoutState = {
        menuOpened: false,
    };

    static contextTypes = {
        router: React.PropTypes.any,
    }

    componentDidMount() {
        if (Hammer) {
            const hammer = new Hammer(this.refs.siteNavigation);
            hammer.add(new Hammer.Pan({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: 10,
                inputClass: Hammer.TouchInput,
            }));
            hammer.on('panstart panmove panend pancancel', ev => {
                if (ev.pointerType !== 'touch') {
                    return;
                }
                const delta = ev.deltaX;
                const percent = (100 / this.containerWidth) * delta;
                this.refs.siteNavigation.style.width = Math.round(this.containerWidth - delta).toString() + 'px';
                this.refs.siteNavigationOverlay.style.opacity =
                    Math.min(0.7, 0.7 * (this.containerWidth - delta) / this.containerWidth);
                if (ev.type === 'panend' || ev.type === 'pancancel') {
                    if (percent > 30 && ev.type === 'panend') {
                        this.toggleMenu();
                    }
                    else {
                        this.refs.siteNavigation.style.width = this.containerWidth.toString() + 'px';
                    }
                }
            });

            const containerHammer = new Hammer(this.refs.container, {
                inputClass: Hammer.TouchInput,
            });
            containerHammer.on('swipeleft', ev => {
                if (this.state.menuOpened) {
                    return;
                }
                const delta = ev.deltaX;
                const containerWidth = 300;
                const percent = -(100 / containerWidth) * delta;
                if (percent > 30) {
                    this.toggleMenu();
                }
            });
        }
    }

    componentWillReceiveProps(nextProps: LayoutProps) {
        if (nextProps.content !== this.props.content) {
            this.setState({ menuOpened: false });
        }
    }

    componentDidUpdate() {
        if (document !== undefined) {
            if (this.state.menuOpened) {
                document.getElementsByTagName('html')[0].classList.add('overlay');
            }
            else {
                document.getElementsByTagName('html')[0].classList.remove('overlay');
            }
            setTimeout(() => {
                this.refs.siteNavigationOverlay.style.opacity = null;
                this.containerWidth = this.refs.siteNavigation.offsetWidth;
                this.refs.siteNavigation.style.width = 'auto';
            }, 500);
        }
    }

    containerWidth: number = 0;

    toggleMenu() {
        const { menuOpened } = this.state;
        this.setState({ menuOpened: !menuOpened });
    }

    renderLink(menuItem: { href: string; caption: string }): React.Element<*> {
        const { router } = this.context;
        if (router.isActive(menuItem.href, true)) {
            return (
                <Link title={menuItem.caption} className={cn('site-section')}>
                    {menuItem.caption}
                </Link>
            );
        }
        return (
            <Link title={menuItem.caption} to={menuItem.href} className={cn('site-section')}>
                {menuItem.caption}
            </Link>
        );
    }

    render() {
        const { menuOpened } = this.state;
        const {
            title,
            content,
            additionalFooterText,
            route: { layout },
        } = this.props;
        return (
            <div className={cn('root')} ref='container'>
                <Helmet
                    htmlAttributes={{
                        lang: layout.lang,
                    }}
                    titleTemplate={layout.titleTemplate}
                    meta={[
                        { content: 'http://tech.skbkontur.ru' + logoSocialImage, property: 'og:image' },
                    ]}
                    link={[
                        ...appleTouchIcons,
                        { ['href']: '/favicon.ico', ['rel']: 'shortcut icon' },
                        { ['href']: 'http://tech.skbkontur.ru' + logoSocialImage, ['rel']: 'image_src' },
                    ]}
                />
                <header>
                    <div className={cn('nav-bar-container')}>
                        <div className={cn('nav-bar', 'fixed-width-content', { 'show-menu': menuOpened })} id='nav-bar'>
                            <div
                                ref='siteNavigationOverlay'
                                onClick={() => this.toggleMenu()}
                                id='site-navigation-menu-overlay'
                                className={cn('overlay')}
                            />
                            <a href='https://kontur.ru' className={cn('logo')} />
                            <div className={cn('spacer')} />
                            <button
                                className={cn('site-navigation-button', { opened: menuOpened })}
                                id='site-navigation-button'
                                onClick={() => this.toggleMenu()}>
                                <span className={cn('button-hamburger')} />
                                <span className={cn('button-close')} />
                            </button>
                            <nav ref='siteNavigation' className={cn('site-navigation')} id='site-navigation'>
                                <ul>
                                    {layout.menu.map((menuItem, index) => (
                                        <li key={index}>
                                            {this.renderLink(menuItem)}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={cn('title-container')}>
                        <h1 className={cn('fixed-width-content')}>{title}</h1>
                    </div>
                </header>
                <div className={cn('content')}>
                    {content}
                </div>
                <Footer
                    additionalFooterText={additionalFooterText}
                    skbkonturSinceCaption={layout.skbkonturSinceCaption}
                    lang={layout.lang}
                />
            </div>
        );
    }
}
