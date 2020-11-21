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
