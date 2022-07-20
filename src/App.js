import './App.css';
import Intro from './components/Intro';
import Trending from './components/Trending';
import NavigationBars from './components/NavigationBars';
import './style/pertama.css'
import TvShow from './components/TvShow';


function App() {
  return (
    <div>

    <div>
      <NavigationBars />
      <Intro />
    </div>
    <div>
      <Trending/>
      <TvShow />
    </div>
    </div>
    
  );
}

export default App;
