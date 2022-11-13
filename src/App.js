import React from  'react';
import QuestionBox from './components/QuestionBox/QuestionBox';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

function App(props) {
 
  return (
    <div className='App'>
      <Header />
      <QuestionBox />

      {/*
      <IntroForm />
      <Types />  
      <Result />
      */}
      <Footer />
    </div>
  );
}

export default App;
