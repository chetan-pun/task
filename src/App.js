import './App.css';
import Bottom from './components/bottom';
import Main from './components/main';
import Navbar from './components/navigation';
import SearchProvider from './context/searchProvider';

function App() {
  return (
    <div className="App">
      <SearchProvider>
      <Navbar/>
      <Main/>
      </SearchProvider>
      <Bottom/>
    </div>
  );
}

export default App;
