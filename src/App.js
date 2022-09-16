import './App.css';
import Bottom from './components/bottom';
import Main from './components/main';
import Navbar from './components/navigation';
import JokeProvider from './context/jokeProvider';
import SearchProvider from './context/searchProvider';

function App() {
  return (
    <div className="App">
      <SearchProvider>
      <JokeProvider>
      <Navbar/>
      <Main/>
      </JokeProvider>
      </SearchProvider>
      <Bottom/>
    </div>
  );
}

export default App;
