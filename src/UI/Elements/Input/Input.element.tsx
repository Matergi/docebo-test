import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {font} from '../Text/Text.element';

interface Props {
  style?: any;
  color?: string;
  selectionColor?: string;
  underlineFocusColor?: string;
  underlineColor?: string;
  placeholder?: string;
  children?: any;
  onChange: (value: string) => void;
  value?: string;
  isPassword?: boolean;
  keyboard?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  error?: boolean;
  maxLength?: number;
  editable: boolean;
  fontScaling?: boolean;
  allowFontScaling?: boolean | undefined;
}

const InputElement = (props: Props) => {
  const [value, onChangeText] = useState(props.value ? props.value : '');

  return (
    <View style={[styles.row, props.style]}>
      <TextInput
        editable={props.editable}
        autoCapitalize={'none'}
        autoCompleteType={'off'}
        secureTextEntry={props.isPassword}
        selectionColor={props.selectionColor}
        placeholder={props.placeholder}
        keyboardType={props.keyboard}
        style={[
          props.underlineColor ? styles.inputBottomLine : {},
          props.underlineColor
            ? {
                borderBottomColor: props.underlineColor,
              }
            : {},
          styles.input,
          {color: props.color},
          props.error && styles.error,
        ]}
        onChangeText={(text) => {
          onChangeText(text);
          props.onChange && props.onChange(text);
        }}
        value={props.value ? props.value : value}
        maxLength={props.maxLength}
        allowFontScaling={props.allowFontScaling}
      />
      {props.children}
    </View>
  );
};

InputElement.defaultProps = {
  editable: true,
  fontScaling: false,
  color: '#000',
};

const styles = StyleSheet.create({
  inputBottomLine: {
    paddingLeft: 6,
    borderBottomWidth: 1,
    ...font,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    padding: 0,
  },
  error: {
    borderBottomColor: '#f00',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
});

export default InputElement;
