import './App.css';
import './Searchbar'
import Searchbar from './Searchbar';

function App() {
  return (
    <div className='App h-screen w-screen bg-mantle flex flex-col justify-center items-center'>
      <Searchbar text='thenameofyoursearchengine' />
    </div>
  );
}

export default App;
