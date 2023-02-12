import styled from 'styled-components';

// import * as S from '../components/styled/ShareStyle';
/*
    사용하고 싶은 파일에서 위에처럼 import 하고
    S.DivFlex 로 사용하면 된다
    여기에 여러개 작성 가능 !!
*/
export const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;
