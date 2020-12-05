import {TextStyle, ViewStyle} from 'react-native';

type Screen = {
  backgroundColor: string;
  headerTextColor: string;
};

export type Theme = {
  colorAccent: string;
  backgroundAccent: string;
  shadow: ViewStyle;
  screen: Screen;
  label: string;
  text: {
    h1: TextStyle;
    h2: TextStyle;
    h3: TextStyle;
    h4: TextStyle;
    h5: TextStyle;
    h6: TextStyle;
    subtitle1: TextStyle;
    subtitle2: TextStyle;
    body1: TextStyle;
    body2: TextStyle;
    sectionTitle: TextStyle;
    button: TextStyle;
    caption: TextStyle;
    overline: TextStyle;
  };
};

const defaultTheme: Theme = {
  colorAccent: '#160452',
  backgroundAccent: '#A6A0CC',
  shadow: {
    shadowColor: '#160452',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.18,
    shadowRadius: 7.49,
  },
  screen: {
    backgroundColor: '#F6F4FF',
    headerTextColor: '#000000',
  },
  label: '#A5A0CC',
  text: {
    h1: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 96,
      fontWeight: '300',
      letterSpacing: -1.5,
    },
    h2: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 60,
      fontWeight: '300',
      letterSpacing: -0.5,
    },
    h3: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 48,
      fontWeight: '500',
      letterSpacing: 0,
    },
    h4: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 34,
      fontWeight: '500',
      letterSpacing: 0.25,
      lineHeight: 35,
    },
    h5: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 24,
      fontWeight: '500',
      letterSpacing: 0,
    },
    h6: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0.1,
    },
    body1: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0.5,
    },
    body2: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0.25,
    },
    sectionTitle: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 15,
      fontWeight: '700',
      letterSpacing: 0.25,
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 1.25,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 13,
      fontWeight: '500',
      letterSpacing: 0.4,
    },
    overline: {
      fontFamily: 'ProximaNova-Semibold',
      fontSize: 10,
      fontWeight: '500',
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
  },
};

export default defaultTheme;
