import React from 'react'
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.PRIMARY};
`;

export const StyledTextInput = styled.TextInput`
  font-size: 30px;
  padding: 10px;
  margin: 12px;
  border-width: 1px;
  border-radius: 5px;
  border-color: #4d4d4d;
  border-style: solid;
`;
