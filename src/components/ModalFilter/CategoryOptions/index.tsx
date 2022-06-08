import React from "react";
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native"
import { ButtonSelect, ButtonSelectText } from "./styles";

interface ButtonCategoryProps extends TouchableWithoutFeedbackProps {
  name: string
  selected: boolean
}

export function CategoryOptions({ name, selected, ...rest }: ButtonCategoryProps) {
  return (
    <TouchableWithoutFeedback {...rest}>
      <ButtonSelect selected={selected}>
        <ButtonSelectText selected={selected}>{name}</ButtonSelectText>
      </ButtonSelect>
    </TouchableWithoutFeedback>
  );
}