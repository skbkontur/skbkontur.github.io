import React from 'react';
import '../../styles/index.less';
import cn from 'classnames';
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
            console.log(percent)
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
                <Link title={menuItem.caption} className="site-section">
                    {menuItem.caption}
                </Link>
            )
        }
        return (
            <Link title={menuItem.caption} to={menuItem.href} className="site-section">
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
            route: { layout },
        } = this.props;
        return (
            <div id="react-wrapper" ref='container'>
                <div id="wrapper">
                    <Helmet
                        htmlAttributes={{
                            lang: layout.lang,
                        }}
                        titleTemplate={layout.titleTemplate}
                        meta={[
                            { content: logoSocialImage, property: 'og:image' },
                        ]}
                        link={[
                            ...appleTouchIcons,
                            { ['href']: '/favicon.ico', ['rel']: 'shortcut icon' },
                            { ['href']: logoSocialImage, ['rel']: 'image_src' },
                        ]}
                    />
                    <header>
                        <div className="nav-bar-container">
                            <div className={cn('nav-bar', 'fixed-width-content', { 'show-menu': menuOpened })} id="nav-bar">
                                <div
                                    ref='siteNavigationOverlay'
                                    onClick={() => this.toggleMenu()}
                                    id="site-navigation-menu-overlay"
                                    className="overlay"></div>
                                <a href="https://kontur.ru" className="logo"></a>
                                <div className="spacer"></div>
                                <button
                                    className={cn('site-navigation-button', { 'opened': menuOpened })} id="site-navigation-button"
                                    onClick={() => this.toggleMenu()}>
                                    <span className="button-hamburger"></span>
                                    <span className="button-close"></span>
                                </button>
                                <nav ref='siteNavigation' className="site-navigation" id="site-navigation">
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
                        <div className="title-container">
                            <h1 className="fixed-width-content">{title}</h1>
                        </div>
                    </header>
                    {content}
                    <div id="push"></div>
                </div>
                <Footer
                    skbkonturSinceCaption={layout.skbkonturSinceCaption}
                    lang={layout.lang}
                />
            </div>
        );
    }
}
