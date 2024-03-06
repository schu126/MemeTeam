import React, { useState } from 'react';

function MemeCard({ meme }) {
  return (
      <div>
        <Link to={`/memes/${meme.id}`}>
          <img src={meme.image} alt={meme.title || 'Meme'} />
        </Link>
      </div>
  );
}

export default MemeCard;
