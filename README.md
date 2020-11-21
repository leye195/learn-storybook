# Learn Story Book

## Story Book?

storybook은 컴포넌트 단위의 개발 환경을 지원하는 도구로서 개발자가 View를 개발할 때 고립된 환경을 제공해서 관심사를 의존성과 환경으로부터 분리시켜 준다. 그리고 개발자는 비로소 뷰에 집중할 수 있게 되고, 외부 상태에 의존하지 않으면서 고립된 상태로 스스로를 표현하는 컴포넌트를 개발할 수 있게 된다.

## Installation

Storybook은 React 뿐만 아니라 Vue도 지원하며, 최근에는 Angular도 지원하고 있다.

babel이나 webpack 관련 설정도 해줘야 되나, CRA를 활용해서 그 과정을 생략해 줄 수 있다.

```
//story-cli를 글로벌로 설치
npm install -g @storybook/cli
yarn add global @storybook/cli
```

프로젝트 루프 폴더에서 다음 명령을 활용하면 필요한 의존성을 자동으로 설치해주고 `package.json` 에 scripts 실행 및 빌드 명령어도 추가 된다.

```
getstorybook init

//프로젝트 시작
yarn storybook
npm storybook
```

## Storybook 살펴보기

프로젝트 `src` 에 `stories` 는 Storybook에 실제로 올라가는 컴포넌트들을 정의하는 파일들이 있는 폴더이다.

그 안을 살펴 보면 각 UI 컴포넌트와 뒤에 `.stories.js` 혹은 `.stories.ts` 로 끝나는 파일들이 있음

`Button.stories.js` 를 보면 아래와 같이 작성이 되어 있음

```jsx
//Button.stories.js

import React from "react";
import { Button } from "./Button";

const buttonObject = {
  title: "Example/Button",
  component: Button,
};

//Templated을 활용해 재사용성을 높일 수 있음
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button", // label을 수정해 보여줄 이름을 업데이트 해줄 수 있음
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export default buttonObject;
```

`.stories.js` 파일에는 한 컴포넌트에 관련된 모든 `stories` 를 정의해 줄 수 있으며 각 story 는 sidebar의 item으로 반영이 되며 클릭 할 경우 Canvas에 보여지게 된다.

<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/02002bbd-fcb6-48a3-8bc6-cb2c2c23b2c5/_2020-11-21__11.33.57.png"/>

### Toolbar

storybook에는 내부적으로 아래와 같은 편리한 툴들을 제공하고 있다.

<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d65fd01-abc6-4d0e-acbb-ffeb2ba31492/Untitled.png"/>

<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0aad7e26-24a0-449c-8924-76ce437e4332/_2020-11-21__11.37.38.png">

- 🔍 Zooming visually scales the component so you can check the details.
- 🖼 Background changes the rendered background behind your component so you can verify how your component renders in different visual contexts.
- 📱 Viewport renders the component in a variety of dimensions and orientations. It’s ideal for checking the responsiveness of components.

### **StoryBook 작성해보기**

```
Sample.js | ts
Sample.stories.js | ts
```

작성 Sample 컴포넌트

```
//Sample.js
import React from 'react';

export const Sample = () =>{
    return <div>Sample</div>
};

//Sample.stories.js
import React from 'react';
import {Sample} from './Sample';

const sampleObject = {
    title: 'Sample',
    component: Sample
};

const Template = (args) => <Sample {...args}/>

export const SampleComponent = Template.bind({});
SampleComponent.args = {

}

export default sampleObject;
```

ButtonGroup 컴포넌트

```
import React from 'react';
import {ButtonGroup} from 'ButtonGroup';
import * as ButtonStories from './Button.stories';

export default {
	title: 'Button Group',
	component: ButtonGroup,
}

const Template = (args) => <ButtonGroup {...args}/>

export const Pair = Template.bind({});
Pair.args = {
	buttons: [...ButtonStories.Primary.args, ...ButtonStories.Secondary.args],
	orientation: 'horizontal',
};
```

Button 컴포넌트

```
// story 정의
import React from 'react';
import {Button} from './Button';

const Template = (args) => <Button {...args}/>

export const Primary = Tamplate.bind({});
Primary.args = {backgroundColor:'',label:'primary'};

export const Second = Tamplate.bind({});
Second.args = {backgroundColor:'',label:'second'};

```

**parameters 활용**

parameters는 storybook의 정적 메타데이터를 설정하는데 메소드를 정의 할 수 있다.

```
// Button.stories.js

import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
         { name: 'red', value: '#f00', },
         { name: 'green', value: '#0f0', },
         { name: 'blue', value: '#00f', },
      ]
    }
  }
}
```

2개 혹은 그 이상의 컴포넌트들

디자인 시스템 혹은 컴포넌트 라이브러리를 만들 때 2개 혹은 그 이상의 컴포넌들이 같이 동작하는 것을 디자인해 만들어야 할 때가 있다.

예를 들어 List Component를 보면, 여러 ListItem 컴포넌트를 활용하는 것을 볼 수 있는데

```
import React from 'react';
import List from './List';
import ListItem from './ListItem';

export default {
	component: List,
	title: 'list',
};

export const Empty = (args) => <List {...args}/>

export const OneItem = (args) => (
	<List {...args}>
		<ListItem/>
	</List>
)

export const ManyItems = (args) => (
	<List {...args}>
		<ListItem/>
		<ListItem/>
		<ListItem/>
	</List>
)

// const Template = (args) => <List {...args}/>
```

**Loaders**

loader는 story 와 decorator에 데이터를 불러오게 해주는 비동기 함수이며, story의 loader는 story render가 진행되기 전에 실행된다. 불러온 데이터는 render context를 통해 story로 들어온다.

```
//TodoItem.stories.js

import React from 'react';
import axios from 'axios';
import {TodoItem} from './TodoItem';

export const Primary = (args, {loaded:{todo}}) => <TodoItem {...args} {...todo}/>
Primary.loaders = [
	async () => ({
		todo: (await axios.get(``))
	})
];
// story context에 있는 loaded 필드를 통해 데이터를 받아올수 있다.
```

**global loaders**

.storybook/preview.js 에서 모든 story에 사용가능한 loader를 설정해 줄 수 도 있다.

```
// .storybook/preview.js

import React from 'react';
import fetch from 'node-fetch';

export const loaders = [
  async () => ({
    currentUser: (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
  }),
];
// loaded.currentUser 로 데이터에 접근 가능
```
