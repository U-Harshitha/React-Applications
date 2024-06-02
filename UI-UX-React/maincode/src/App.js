
import './App.css';
import { Footer, Blog,Possibility,Features,WhatGPT,Header } from './containers';
import { Article,Brand,Cta,Navbar } from './components';
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
       <Brand/>
       <WhatGPT/>
       <Features/>
       <Possibility/>
       <Cta/>
       <Blog/>
       <Footer/>
    </div>
  );
}

export default App;
