import React from 'react';
import {ColorGroup} from './Colors';
import {Color} from './Color';
import { colorValues } from '../styles/variables';


const colors = {
    component: ColorGroup,
    title: 'Colors/Color'
}

export default colors;

export const GrayColorList = (args) => {
    return (
    <ColorGroup {...args}>
        {Object.entries(colorValues).filter(color=>color[0].startsWith('gray')).map(color=><Color key={color[0]} color={color[1]} size={"sm"} text={color[1]}/>)}
    </ColorGroup>
    )
}