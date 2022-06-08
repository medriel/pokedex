import React from "react";
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";
import { TabSectionText, TabSectionView } from "./styles";

interface SectionProps extends TouchableWithoutFeedbackProps {
  title: string;
  selected?: boolean;
}

export function Section({ title, selected, ...rest }: SectionProps) {
  console.log(selected)
  return (
    <TouchableWithoutFeedback {...rest}>
      <TabSectionView selected={selected}>
        <TabSectionText selected={selected}>{title}</TabSectionText>
      </TabSectionView>
    </TouchableWithoutFeedback>
  );
}