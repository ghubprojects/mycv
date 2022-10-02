import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Image = forwardRef(({ src, alt, className, ...restProps }, ref) => {
    return (
        <img
            ref={ref}
            src={src}
            className={className}
            alt={alt}
            {...restProps}
            onError={(e) => {
                throw new Error();
            }}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
