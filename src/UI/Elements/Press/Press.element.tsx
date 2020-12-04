import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
  children?: any;
  onPress?: () => void;
}

const PressElement = ({style, children, onPress}: Props) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={[style]}>
    {children}
  </TouchableOpacity>
);

export default PressElement;
