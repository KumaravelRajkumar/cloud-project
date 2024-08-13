import React from 'react';
import './App.css';
import Cart from './components/cart'
import Shop from './components/shop';
import Display from './components/display';
import Search from './components/search';
import Bevarages from './components/bevarages'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  
  return (
    <>
    <>Hi</>
    <GoogleOAuthProvider clientId="642146652821-b9ip7s68ea19oq7ptgqqlq4l2fttq82s.apps.googleusercontent.com">
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

    <div className="App">
      
        <Search />
        <Shop/>
        <Display />
        <Bevarages />
    </div>
    </GoogleOAuthProvider>
    </>
  );
}

export default App; //hello da