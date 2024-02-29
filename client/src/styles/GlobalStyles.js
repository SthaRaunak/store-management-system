import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --color-test: #0F1E16;
    --color-brand: #7AE072;
    --color-brand-darker: #72C46A;
    --color-gray: #F5F5F5;
    --color-testLighter: #1F2D26;
    --color-danger: #67120F;
    --backdrop-color: rgba(255, 255, 225 ,0.1);
    
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
   font-family: 'Open Sans', sans-serif; 
}
`;

export default GlobalStyles;
