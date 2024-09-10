import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'br_sonomasemibold';
    src: url('/assets/fonts/brsonoma-semibold-bf654c45268c340-webfont.woff2') format('woff2'),
         url('/assets/fonts/brsonoma-semibold-bf654c45268c340-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'br_sonomabold';
    src: url('/assets/fonts/brsonoma-bold-bf654c4526823f5-webfont.woff2') format('woff2'),
         url('/assets/fonts/brsonoma-bold-bf654c4526823f5-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}



@font-face {
    font-family: 'br_sonomaregular';
    src: url('/assets/fonts/brsonoma-regular-bf654c45266c042-webfont.woff2') format('woff2'),
         url('/assets/fonts/brsonoma-regular-bf654c45266c042-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

  body {
    font-family: 'br_sonomaregular';
  }
`;

export default GlobalStyles;