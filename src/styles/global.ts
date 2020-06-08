import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #e6ecf0;
    font-family: 'Helvetica Neus', 'Helvetica', 'Arial', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiesed !important;
  }

  button {
    cursor: pointer;
  }
`;
