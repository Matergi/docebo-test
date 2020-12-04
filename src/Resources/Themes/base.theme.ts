type Screen = {
  backgroundColor: string;
  headerTextColor: string;
};

type Shadow = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
};

export type Theme = {
  colorAccent: string;
  backgroundAccent: string;
  shadow: Shadow;
  screen: Screen;
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
    backgroundColor: '#ffffff',
    headerTextColor: '#000000',
  },
};

export default defaultTheme;
