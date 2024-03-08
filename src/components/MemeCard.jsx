import React, { useState } from 'react';
import { Link } from "react-router-dom";

function MemeCard({ meme, handleLikeClick }) {
    const [newTags, setNewTags] = useState('');
    const [editingTags, setEditingTags] = useState(false);

    const handleLike = () => {
        handleLikeClick(meme.id);

        fetch(`http://localhost:3000/memes/${meme.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ liked: !meme.liked }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update like status');
            }
            console.log('Like status updated successfully');
        })
        .catch(error => {
            console.error('Error updating like status:', error);
        });
    };
    const handleToggleEditingTags = () => {
        setEditingTags(prevState => !prevState);
        setNewTags(''); // Reset newTags when toggling
    };

    // Handle Patch for the Edit feature
    const handleSubmitTags = () => {
        fetch(`http://localhost:3000/memes/${meme.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tags: newTags.split(',').map(tag => tag.trim()) }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update tags');
            }
            console.log('Tags updated successfully');
            setEditingTags(false);
        })
        .catch(error => {
            console.error('Error updating tags:', error);
        });
    };

    return (
        <div className='MemeCard'>
            <h1></h1>
            <Link to={`/memes/${meme.id}`}> {/* Wrap the image with Link */}
                <img src={meme.image} alt={meme.title || 'Meme'} />
            </Link>
            <div className="button-container">
                <button onClick={handleToggleEditingTags}>
                    {editingTags ? '❌ Close Tags' : '📝 Add Tags'}
                </button>
                <button onClick={handleLike}>
                    {meme.liked ? '❤️ Liked' : '🤍 Like'}
                </button>
            </div>
            {editingTags && (
                <div className="edit-container">
                    <input 
                        type="text" 
                        placeholder="Add tags separated by a comma" 
                        value={newTags} 
                        onChange={e => setNewTags(e.target.value)} 
                    />
                    <button onClick={handleSubmitTags}>Save</button>
                </div>
            )}
        </div>
    );
}

export default MemeCard;
