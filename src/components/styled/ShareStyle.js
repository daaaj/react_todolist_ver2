import styled, { createGlobalStyle } from 'styled-components';

// import * as S from '../components/styled/ShareStyle';
/*
    사용하고 싶은 파일에서 위에처럼 import 하고
    S.DivFlex 로 사용하면 된다
    여기에 여러개 작성 가능 !!
*/
export const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin: 0;

  @font-face {
    font-family: 'UhBeeKang-Ja';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeKang-Ja.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  font-family: 'UhBeeKang-Ja';
  }
`;

export const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;
