import './App.css';
import './style/header.css';
import NavContainer from './NavContainer';
// import WorkoutList from './components/PracticeAPI';

function App() {
  return (
    <div className="App">
      {/* this is the nav header container */}
      <header className="allHolder">
        {/* this is the container holding title and logo */}
        <section className="imageAndTitle">
          {/* this is the logo container */}
          <section className="logo">
            <img></img>
          </section>
          {/* this is the title conatiner */}
          <section>
            <h1>Gym Bunny</h1>
          </section>
        </section>

        <NavContainer/>

      </header>
      {/* <WorkoutList /> */}
    </div>
  );
}

export default App;
