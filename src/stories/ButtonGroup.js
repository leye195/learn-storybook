import React from 'react';
import './ButtonGroup.css';
import './button.css';

const ButtonGroup = ({children}) => {
    return <div className={'button-container'}>
        {children}
    </div>
};
export default ButtonGroup;
