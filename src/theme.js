import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    appBar: '#24292e',
    tabText: '#ffffff',
    white: '#ffffff',
    error: '#d73a4a',
  },

  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
    small: 12,
  },

  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },

  fontWeights: {
    normal: '400',
    bold: '700',
  },

  spacing: {
    small: 6,
    medium: 10,
    large: 15,
  },

  avatar: {
    small: 50,
  },
};

export default theme;
