import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    measures: {
      horizontalDistance: number;
    };
    colors: {
      background: string;
      primary: string;
      light: string;
      secondary: string;
      text: string;
      lightText: string;
    };
  }
}
