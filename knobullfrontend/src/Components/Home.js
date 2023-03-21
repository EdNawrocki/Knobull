import React from 'react';
import '../Home.css';
import StudentCard from './StudentCard';
import ListMediaObjects from './ListMediaObjects';

function Home() {
    return (
        <React.Fragment>
            <div className="container App">  {/* use container from Bootstrap */}
                <h1>Header</h1>
                <h1>News Articles Go Here</h1>
                <div className="row">
                    <div className="col-8">
                        <StudentCard></StudentCard>
                        <hr></hr>
                        <h2>The Latest</h2>
                        <ListMediaObjects />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;