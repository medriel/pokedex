import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Background = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  align-self: center;
  width: 252px;
  height: 88px;
`;

export const Content = styled.View`
  background-color: #ffffff;
  margin: 20px 20px;
  padding: 20px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan600};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  line-height: 30px;
  margin-top: 10px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan400};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2px;
`;

export const TextInputEmail = styled(TextInput)`
  border-top-right-radius:4px;
  border-top-left-radius:4px;
  margin-top: 30px;
`;

export const TextInputPassword = styled(TextInput)`
  border-top-right-radius:4px;
  border-top-left-radius:4px;
  margin-top: 24px;
`;

export const ButtonLogin = styled(Button)`
  margin-top: 42px;
  padding: 10px 0px;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan700};
  font-size: 16px;
  text-transform: capitalize;
`;

