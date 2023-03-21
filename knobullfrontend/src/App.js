import './App.css';
import StudentCard from './Components/StudentCard';
import NavBar from './Components/NavBar'
import ListMediaObjects from './Components/ListMediaObjects';


function App() {
  return (
    <div>
      <NavBar/>
      <div className="container App">  {/* use container from Bootstrap */}
        <h1 class="display-4">Student News</h1>
        <hr></hr>
        {/*<h1 class="display-5">News Articles Go Here</h1>*/}

        <div className="row">
          <div className="col-8">
            <StudentCard></StudentCard>
            <hr></hr>
            <h2>The Latest</h2>
            <ListMediaObjects/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
