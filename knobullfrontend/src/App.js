import './App.css';
import StudentCard from './Components/StudentCard';
import NavBar from './Components/NavBar'
import ListMediaObjects from './Components/ListMediaObjects';


function App() {
  return (
    <div>
      <NavBar/>
      <div className="container App">  {/* use container from Bootstrap */}
        <h1>Header</h1>
        <h1>News Articles Go Here</h1>
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
