import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Text({ label, ...props }) {
  return (
    <div
      {...props}
    >
      {label}
    </div>
  );
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
};
