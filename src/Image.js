import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
    constructor() {
        super();

        this.state = {
            loading: true
        };

        this._handleImageLoaded = this._handleImageLoaded.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({ loading: true });
        }
    }

    _handleImageLoaded() {
        this.setState({ loading: false });

        const { onLoaded } = this.props;
        if (onLoaded) onLoaded();
    }

    render() {
        const { loading } = this.state;
        const { className, ...imgProps } = this.props;

        const classNames = ['kwfUp-reactImage'];
        if (loading) classNames.push('kwfUp-reactImage--loading');
        if (className) classNames.push(className);

        return (
            <div
                className={classNames.join(' ')}
                style={{
                    paddingBottom: `${100 * (imgProps.height / imgProps.width)}%`
                }}
            >
                <img
                    {...imgProps}
                    onLoad={this._handleImageLoaded}
                />
            </div>
        );
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    onLoaded: PropTypes.func
};

export default Image;
