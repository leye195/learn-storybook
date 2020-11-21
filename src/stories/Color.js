import React from 'react';
import PropTypes from 'prop-types';
import './Color.css';

export const Color = ({color,size,text=''}) => {
    return <div className={[`color-size`,`color-size-${size}`].join(' ')} style={{backgroundColor:color}}>
        {text}
    </div>
};
Color.PropType={
    color:PropTypes.string,
    size:PropTypes.string,
    text:PropTypes.string
}