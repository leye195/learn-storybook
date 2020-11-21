import React from 'react';
import PropTypes from 'prop-types';
import './Sample.css';

export const Sample = ({backgroundColor,label=""}) =>{
    return <div className={'sample'} style={backgroundColor && { backgroundColor }}>{label}</div>
}

Sample.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string
}
