import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './index.css'
import { theme } from "./styles/Theme";

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');

// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript
// root.render(

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
       <BrowserRouter>
     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
   </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();