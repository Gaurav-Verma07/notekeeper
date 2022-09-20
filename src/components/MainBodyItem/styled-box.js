import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

export const OptionBox = styled.div`
  background-color: ${(props) => props.bColor};
`;

export const Box = styled.div`
  background-color: ${(props) => hexToRgba(props.bColor, '.7')};
`;

