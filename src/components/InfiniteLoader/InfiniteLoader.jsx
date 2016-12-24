import React from 'react';
import ReactDom from 'react-dom';

export default class InfiniteLoader extends React.Component {
    componentDidMount() {
        this.scrollListener();
        if (window) {
            window.addEventListener('scroll', this.scrollListener);
            window.addEventListener('resize', this.scrollListener);
        }
    }

    componentWillUnmount() {
        if (window) {
            window.removeEventListener('scroll', this.scrollListener);
            window.removeEventListener('resize', this.scrollListener);
        }
    }

    topPosition(domElt) {
        if (!domElt) {
            return 0;
        }
        return domElt.offsetTop + this.topPosition(domElt.offsetParent);
    }

    scrollListener = () => {
        const { onLoadMore } = this.props;

        const el = ReactDom.findDOMNode(this.refs.container);
        const scrollTop = (window.pageYOffset !== undefined)
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (this.topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight < Number(10)) {
            onLoadMore();
        }
    }

    render() {
        const { children, onLoadMore, ...props } = this.props;
        return (
            <div ref='container' {...props}>
                {children}
            </div>
        );
    }
}
