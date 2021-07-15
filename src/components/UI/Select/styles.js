import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  margin: 8px 0;
  position: relative;

  box-icon {
    fill: ${({ theme }) => theme.colors.darkgrey};
    font-size: 16px;
    pointer-events: none;
    position: absolute;
    right: 8px;
    top: 48px;
  }
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.colors.darkgrey};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin: 8px 0;
`;

export const SelectStyled = styled.select`
  appearance: none;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.lightgrey};
  color: ${({ theme }) => theme.colors.darkgrey};;
  cursor: pointer;
  font-size: 1em;
  line-height: normal;
  min-height: 42px;
  padding: 8px 32px 8px 16px;
  width: 100%;

  ${({ disabled }) => disabled
    && css`
     opacity: .4;
    `}

  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.lightestgrey};
    box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.grey};
    outline: none;
  }
`;

