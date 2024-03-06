import React, { useState } from 'react';

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

    const handleAddTags = () => {
        setEditingTags(true);
        setNewTags('');
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
            <img src={meme.image} alt={meme.title || 'Meme'} />
            <div className="button-container">
                <button onClick={handleAddTags}>📝</button>
                <button onClick={handleLike}>
                    {meme.liked ? '❤️ Liked' : '🤍 Like'}
                </button>
            </div>
            {/* && is a conditional rendering in jsx */}
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
