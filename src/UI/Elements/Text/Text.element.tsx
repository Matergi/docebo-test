import React from 'react';
import {Text, Platform, StyleSheet} from 'react-native';

const fontFamilyAndroid = 'ProximaNova-Semibold';
const fontFamilyiOS = 'ProximaNova-Semibold';

interface Props {
  children: string;
  style?: any;
}

const TextElement = ({children, style}: Props) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

export const font =
  Platform.OS === 'ios'
    ? {fontFamily: fontFamilyiOS, color: '#000'}
    : {fontFamily: fontFamilyAndroid, color: '#000'};

const styles = StyleSheet.create({
  text: {
    ...font,
    padding: 0,
  },
});

TextElement.defaultProps = {
  fontScaling: false,
};

export default TextElement;
