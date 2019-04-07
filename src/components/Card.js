import React from "react";



function Cards(props) {
   let divStyle = {
      width: '10rem'
   }

   return (
      <div className="card" style={divStyle} onClick={props.handleClickGem}>
         <img src={'./image/' + props.image + '.png'} data-gem={props.image} className="card-img-top" alt="gems" />
      </div>
   );
}

export default Cards;
