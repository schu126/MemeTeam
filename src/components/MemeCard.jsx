import React from 'react';
import { Link } from 'react-router-dom';

function MemeCard({ meme }) {
    const handleLikeClick = () => {
        
        const updatedMeme = { ...meme, liked: !meme.liked };
        fetch(`http://localhost:3000/memes/${meme.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMeme),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update like status');
            }
            console.log('Like status updated successfully');
         
        });
    };

    return (
        <>
            <div className='MemeCard'>
                {/* <NavBar /> */}
                {/* <h2>add like button & edit option to update tags</h2> */}
                <h2></h2>
                <Link to={`/memes/${meme.id}`}>
                    <img src={meme.image} alt={meme.title || 'Meme'} />
                    <br />
                    <button onClick={handleLikeClick}>{meme.liked ? '❤️ Liked' : '🤍 Like'}</button> <br />
                    <button>EDIT</button>
                </Link>
            </div>
        </>
    );
}

export default MemeCard;
