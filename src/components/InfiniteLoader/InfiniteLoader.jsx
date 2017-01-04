// @flow
import React from 'react';
import ReactDom from 'react-dom';
import { usedForOmit } from 'type-checking';

type InfiniteLoaderProps = {
    children?: any;
    onLoadMore: () => any;
};

export default class InfiniteLoader extends React.Component {
    props: InfiniteLoaderProps;

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

    topPosition(element: any): number {
        if (!element) {
            return 0;
        }
        return element.offsetTop + this.topPosition(element.offsetParent);
    }

    scrollListener = () => {
        const { onLoadMore } = this.props;

        const element = ReactDom.findDOMNode(this.refs.container);
        const scrollTop = (window.pageYOffset !== undefined)
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (this.topPosition(element) + element.offsetHeight - scrollTop - window.innerHeight < Number(10)) {
            onLoadMore();
        }
    }

    render() {
        const { children, onLoadMore, ...props } = this.props;
        usedForOmit(onLoadMore);

        return (
            <div ref='container' {...props}>
                {children}
            </div>
        );
    }
}
