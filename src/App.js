import React, {useState } from  'react';
import QuestionList from './components/QuestionList/QuestionList';
import QuestionBox from './components/QuestionBox/QuestionBox';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.css'

function App(props) {
  const [percentage , setPercentage] = useState(0);

  function handleProgress(){
    setPercentage(percentage+25);
  }

  return (
    <div className='App'>
      <QuestionList />
      <Header />
      <QuestionBox 
      progress={handleProgress}
      // {question={props.question}} 
      />
      <ProgressBar percentage={percentage} />
{/*          <button onClick={()=> handleProgress()}></button>
*/}  

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
