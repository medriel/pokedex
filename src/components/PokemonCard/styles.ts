import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 40px;
  margin-right: 15px;
`;

export const ImagePokemon = styled.Image`
  width: 120px;
  height: 100px;
  margin-top: -60px;
`;

export const TitleContainer = styled.View`
  background-color: #676767;
  padding: 5px 20px ;
  border-radius: 10px;
  margin-top: 15px;
  width: 120px;
  align-items: center;
  display: flex;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.spartan800};
  font-size: 12px;
  color: #ffffff;
`;

