import styled from 'styled-components';
import { media } from '../../../styles';

export const AppWrapper = styled.div`
  height: 100%;
`;

export const AppHeader = styled.header`
  background-color: ${({ theme }) => (theme.colors.green)};

  h1 {
    color: ${({ theme }) => (theme.colors.darkgrey)};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => (theme.fonts.weight.bold)};
    margin: 0;
    padding: 24px;
    text-align: center;
  }
`;

export const AppMain = styled.main`
  background-color: ${({ theme }) => (theme.colors.white)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px 0;

  ${media.desktop`
    background-color: ${({ theme }) => (theme.colors.lightestgrey)};
    min-height: 100%;
    padding: 80px 0;
  `}
`;

export const AppContent = styled.section`
  align-items: center;
  background: ${({ theme }) => (theme.colors.white)};
  margin: 0 auto;
  max-width: 540px;
  padding: 0 16px;
  width: 100%;

  ${media.desktop`
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    margin: 0 auto;
    padding: 40px 80px;
  `}
`;
