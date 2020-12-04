import styled from 'styled-components';

import Logo from '../../icons/Logo';

export const Container = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.pallete.whiteBackground};
`;

export const MainLogo = styled(Logo)`
  margin-left: 16px;
  height: 24px;
  width: 75px;
`;
