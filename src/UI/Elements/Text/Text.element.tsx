import React from 'react';
import {Text} from 'react-native';

interface Props {
  children: string;
}

const TextElement = ({children}: Props) => <Text>{children}</Text>;

export default TextElement;
