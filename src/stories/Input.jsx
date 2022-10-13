import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, placeholder, classDetails, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classDetails}
            {...props}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    classDetails: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    onChange: undefined,
    classDetails: '',
};
