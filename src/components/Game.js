import React, { Component } from "react";
import Card from './Card';

class Game extends Component {

   state = {
      images: ['chrysolite', 'sapphire_orange', 'sapphire_blue', 'garnet', 'spinel', 'topaz_gray', 'tanzanite', 'pearl', 'aquamarine', 'rubi', 'citrine', 'topaz_amber', 'sapphire_purple', 'emerald', 'diamond', 'amethyst_green', 'amethyst_purple', 'kunzite'],
      clickedGems: [],
      wins: 0,
      record: 0,
      message: ''
   };

   increaseScore = (wins, record) => {
      wins++
      if (wins > record) {
         record = wins;
      };
      this.setState({ wins: wins, record: record });

      return this.setState({ wins: wins, record: record });
   };

   handleClickGem = event => {
      let gemSelected = event.target.attributes.getNamedItem('data-gem').value;
      console.log(`Gem selected: ${gemSelected}`);
      let msg = '';

      if (this.state.clickedGems.indexOf(gemSelected) === -1) {
         // Keep going!
         // console.log('GOOD');
         this.state.clickedGems.push(gemSelected);
         msg = ''
         this.increaseScore(this.state.wins, this.state.record);
      } else {
         // You lost! 
         // console.log('BAD');
         msg = 'That was a repeated gem... you lost'
         this.setState({ wins: 0 });
      };

      this.setState({ images: this.shuffleArray(this.state.images), message: msg });
   };

   /*******************************************
    * Randomize array element order in-place. *
    * Using Durstenfeld shuffle algorithm.    *
    *******************************************/
   shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         let temp = array[i];
         array[i] = array[j];
         array[j] = temp;
      };

      console.log(array)

      return array;
   };

   render() {
      return (
         <div>
            <section className="jumbotron pink lighten-4 text-center">
               <div className="container">
                  <h2><strong>Score: {this.state.wins}</strong>| Best record: {this.state.record}</h2>
                  <p id="msg">
                     {this.state.message}
                  </p>
               </div>
            </section>

            <div className="container gems">
               <div className="row thisRow">
                  {this.state.images.map(image => (
                     <div className="col-md-2" key={image}>
                        <Card
                           image={image}
                           handleClickGem={this.handleClickGem}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>

      );
   }
}

export default Game;
