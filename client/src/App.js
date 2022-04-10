import './App.css';
import './style/header.css';
import NavContainer from './NavContainer';
import CurrentUser from './components/CurrentUser';
import bunny from './img/gymBunnyLogoMedium.gif';
import bunnySm from './img/gymBunnyLogoSmall.gif';

// import WorkoutList from './components/PracticeAPI';

function App() {
  return (
    <div className="App">
      {/* this is the nav header container */}
      <img className='imgMed' src={bunny}></img>
      <img className='imgSm' src={bunnySm}></img>

      <header className="allHolder">

        <CurrentUser />

        <NavContainer />

      </header>
      {/* <WorkoutList /> */}
    </div>
  );
}

export default App;
