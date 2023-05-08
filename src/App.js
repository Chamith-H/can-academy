import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <div className='Hero-Image'>
        <div className='Align-Hero-Image'>

        </div>
      </div>
      <div className='Page-Aligner'/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
