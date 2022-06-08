import styled from 'styled-components/native';

export const ContainerTab = styled.View`
  flex: 1;
  padding: 26px;
`;

export const LineInfo = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan800};
  font-size: 14px;
  color: #9A9A9A;
`;

export const ContentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan500};
  font-size: 13px;
  color: #1E1E1E;
`;
