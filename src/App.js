import './App.css';
import Header from './components/Header';
import WelcomeCard from './components/WelcomeCard';
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeCard/>
      <div className='body-cont'>
        <AboutMe/>
      </div>  
    </div>
  );
}

export default App;
