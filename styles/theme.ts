export interface StandardColor {
  superlight: string;
  light: string;
  main: string;
  dark: string;
}

const blue: StandardColor = {
  superlight: '#CAF1F1',
  light: '#5EE6E9',
  main: '#10ECFE',
  dark: '#0E2A47'
};

const purple: StandardColor = {
  superlight: '#DBC2FF',
  light: '#B196FE',
  main: '#3E22BC',
  dark: '#441985'
};

const pink: StandardColor = {
  superlight: '#FFDDF4',
  light: '#F3A9DD',
  main: '#FE65D4',
  dark: '#B41A83'
};

const red: StandardColor = {
  superlight: '#FBBCC7',
  light: '#FE94AB',
  main: '#FE5981',
  dark: '#AC0B3D'
};

export const Theme = {
  colors: {
    blue,
    purple,
    pink,
    red
  }
}