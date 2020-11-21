import React from 'react';
import PropTypes from 'prop-types';
import './Sample.css';

export const Sample = ({backgroundColor,color='white',size="sm",label=""}) =>{
    return <button className={['sample-button',`button-${size}`].join(' ')} style={backgroundColor && { backgroundColor,color}}>{label}</button>
}

Sample.propTypes = {
    backgroundColor: PropTypes.string,
    color:PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string
}
