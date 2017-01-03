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

export default class Layout extends React.Component {
    state = {
        menuOpened: false,
    };

    static contextTypes = {
        router: React.PropTypes.any,
    }

    containerWidth = null;

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

    componentDidMount() {
        var hammer = new Hammer(this.refs.siteNavigation);
        hammer.add(new Hammer.Pan({
            direction: Hammer.DIRECTION_HORIZONTAL,
            threshold: 10,
            inputClass: Hammer.TouchInput,
        }));
        hammer.on('panstart panmove panend pancancel', (ev) => {
            if (ev.pointerType !== "touch") {
                return;
            }
            var delta = ev.deltaX;
            var percent = (100 / this.containerWidth) * delta;
            this.refs.siteNavigation.style.width = Math.round(this.containerWidth - delta).toString() + 'px';
            this.refs.siteNavigationOverlay.style.opacity = Math.min(0.7, 0.7 * (this.containerWidth - delta) / this.containerWidth);
            if (ev.type == 'panend' || ev.type == 'pancancel') {
                if (percent > 30 && ev.type == 'panend') {
                    this.toggleMenu();
                }
                else {
                    this.refs.siteNavigation.style.width = this.containerWidth.toString() + 'px';

                }
            }
        });

        var containerHammer = new Hammer(this.refs.container, {
            inputClass: Hammer.TouchInput,
        });
        containerHammer.on('swipeleft', (ev) => {
            if (this.state.menuOpened) {
                return;
            }
            var delta = ev.deltaX;
            const containerWidth = 300;
            var percent = - (100 / containerWidth) * delta;
            if (percent > 30) {
                this.toggleMenu();
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.content !== this.props.content) {
            this.setState({ menuOpened: false })
        }
    }

    renderLink(menuItem) {
        const { router } = this.context;
        if (router.isActive(menuItem.href, true)) {
            return (
                <Link title={menuItem.caption} className={cn('site-section')}>
                    {menuItem.caption}
                </Link>
            )
        }
        return (
            <Link title={menuItem.caption} to={menuItem.href} className={cn('site-section')}>
                {menuItem.caption}
            </Link>
        );
    }

    toggleMenu() {
        const { menuOpened } = this.state;

        this.setState({ menuOpened: !menuOpened })
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
                        <div className={cn('nav-bar', 'fixed-width-content', { 'show-menu': menuOpened })} id="nav-bar">
                            <div
                                ref='siteNavigationOverlay'
                                onClick={() => this.toggleMenu()}
                                id="site-navigation-menu-overlay"
                                className={cn('overlay')}></div>
                            <a href="https://kontur.ru" className={cn('logo')}></a>
                            <div className={cn('spacer')}></div>
                            <button
                                className={cn('site-navigation-button', { 'opened': menuOpened })} id="site-navigation-button"
                                onClick={() => this.toggleMenu()}>
                                <span className={cn('button-hamburger')}></span>
                                <span className={cn('button-close')}></span>
                            </button>
                            <nav ref='siteNavigation' className={cn('site-navigation')} id="site-navigation">
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
