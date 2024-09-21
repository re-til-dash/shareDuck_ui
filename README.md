# shareDuck-ui

shareDuck 프로젝트를 위해 개발한 UI 라이브러리입니다.
React, Styled-components, Vite 환경에서 개발하였습니다.

## 사용자를 위한 설명

- 설치하기
```
npm install shareduck-ui@latest

or

yarn add shareduck-ui@latest

```

- 해당 레포지토리에 기여하고 싶다면, 언제든 PR을 올려주세요!

## 팀원을 위한 설명

라이브러리에 추가하여 배포하는 과정

1. src/index.tsx에 해당 내용을 다음과 같이 작성합니다. 작성 위치는 해당 파일의 주석을 참고해주세요!
```
export {default as CheckBox} from './components/atoms/CheckBox/CheckBox';
```
2. `yarn build`를 통해 dist 폴더를 새로 생성합니다.
  - 이때, build 오류를 꼭 해결할 것!
3. `package.json` 파일의 버전을 올립니다. 
4. `yarn npm publish`로 dist 폴더를 배포합니다.