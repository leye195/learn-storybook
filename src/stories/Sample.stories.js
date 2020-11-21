import React from 'react';
import {Sample} from './Sample';


const sampleObject = {
    title: 'Sample',
    component: Sample,
    parameters: {
        backgrounds: {
            values:[
              { name: 'red', value: '#f00', },
              { name: 'green', value: '#0f0', },
              { name: 'blue', value: '#00f', },
              { name: 'dark', value: '#000'}
            ]
        }
    },
    decorators: [(Story)=><div style={{margin:'2em'}}><Story/></div>]
};

const Template = (args) => <Sample {...args}/>

export const SampleComponent = Template.bind({});
SampleComponent.args = {
    backgroundColor: '#aac',
    label: 'First',
}

export const SecondSample = Template.bind({});
SecondSample.args = {
    backgroundColor: '#ff0',
    label:'Second'
}


export default sampleObject;