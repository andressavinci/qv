import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestgrey};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkgrey};
  margin-top: 40px;
  padding: 24px;

  p:last-of-type {
    padding-top: 16px;
  }
`;

export const CardText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  padding-top: 2px;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => (theme.fonts.weight.bold)};
  margin: 0;
`;

export const CardPrice = styled.h3`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => (theme.fonts.weight.bold)};
  margin: 0;
  padding-top: 4px;
`;

