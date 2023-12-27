import React from 'react'; // import React var from node_module
import ReactDOM from 'react-dom'; // import ReactDOM var from node_module
import './index.css'; // relative import of CSS file, enabled by webpack

import App from './App'; // relative import of variable named App

import AppLang from './lang-context/AppLang'; // using context & class components
// import AppLangAlt from './lang-contextAlt/AppLangAlt'; // using context & function components

import RegistrationForm from './registrationForm/registrationForm'; // form with controlled components - uses state

import PlayingWithDanger from './PlayingWithDanger/PlayingWithDanger'; // error boundary

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<App />
		<AppLang />
		<RegistrationForm />
		<PlayingWithDanger />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
