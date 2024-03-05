import React from 'react';
import { Link } from 'react-router-dom';

function MemeCard({ meme }) {
  return (
    <div>
      {/* <h2>
        <br/>
        need to make MemeDetail 
      </h2> */}
      <Link to={`/memes/${meme.id}`}>
        <img src={meme.image} alt={meme.title || 'Meme'} />
        <br/><button>❤️</button> <br/>
        <button>EDIT</button>
      </Link>
    </div>
  );
}

export default MemeCard;