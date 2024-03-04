import React from 'react';
import { useParams } from 'react-router-dom';

function MemeCard() {
  let { id } = useParams();

  return (
    <div>
      <h2>Meme Details</h2>
      <p>Display details for meme with ID: {id}</p>
    </div>
  );
}

export default MemeCard;