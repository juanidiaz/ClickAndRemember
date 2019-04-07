import React, { Component } from 'react';
import Game from './components/Game';

class App extends Component {
  
  render() {
    return (
      <div>
        <section className="jumbotron pink lighten-4 text-center">
          <div className="container">
            <h2><strong>Score: <span id="score">0</span></strong>| Best record: <span id="record">0</span></h2>
            <p>
            </p>
          </div>
        </section>

        <div className="container gems">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;