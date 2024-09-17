import './App.css';
import './Searchbar'
import Searchbar from './Searchbar';
import Shortcut from './Shortcut';

function App() {
  return (
    <div className='App h-screen w-screen bg-[url(https://github.com/zhichaoh/catppuccin-wallpapers/blob/main/landscapes/evening-sky.png?raw=true)] bg-cover flex flex-col justify-center items-center'>
      <Searchbar />
      <div className='flex flex-row'>
        <Shortcut url='https://youtube.com' />
        <Shortcut url='https://twitch.tv' />
        <Shortcut url='https://github.com' />
      </div>
    </div>
  );
}

export default App;
