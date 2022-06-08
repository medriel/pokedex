import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
padding: 23px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan700};
  font-size: 24px;
  line-height: 30px;
  color: #3F3F3F;
`;

export const ResetTextFilter = styled.Text`
  color: #4A7DFF;
  font-size: 16px;
  border-bottom-width: 1px;
  border-color: #4A7DFF;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 40px;
`;
export const TitleContentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan600};
  font-size: 16px;
  line-height: 24px;
  color: #3F3F3F;
`;

export const ButtonApply = styled(Button)`
  border-radius: 4px;
`;
