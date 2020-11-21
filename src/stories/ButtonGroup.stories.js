import React from 'react';
import ButtonGroup from './ButtonGroup';
import { Button } from './Button';

const buttonObject = {
  title: 'Common/Button',
  component: ButtonGroup,
}; 


export const ButtonList = (args) => (
    <div>
    <ButtonGroup>
        <Button label="primary" type="primary" size="medium"/>
        <Button label="warning" type="warning" size="medium"/>
        <Button label="normal" size="medium"/>
    </ButtonGroup>
    <ButtonGroup>
        <Button label="primary" type="primary" size="medium" disabled/>
        <Button label="warning" type="warning" size="medium" disabled/>
        <Button label="normal" size="medium" disabled/>
    </ButtonGroup>
    </div>
)



export default buttonObject;