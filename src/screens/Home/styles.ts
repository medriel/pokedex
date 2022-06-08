import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding-left: 35px;
  padding-right: 30px ;
  padding-top: 15px ;
`;

export const Logo = styled.Image`
  align-self: center;
  width: 117px;
  height: 41px;
`;

export const ContainerSearch = styled.View`
  margin-top: 24px;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: #E5E5E5;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.spartan500};
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const FilterView = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;
