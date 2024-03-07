import React, { useState } from 'react';
import NavBar from "../components/NavBar";

function NewMemeForm() {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
      setImage(e.target.value);
  };

  const handleCategoryChange = (e) => {
      setCategory(e.target.value);
  };

  const handleTagsChange = (e) => {
      setTags(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Prepare the meme data
      const memeData = {
          title: '',
          category: category,
          image: image,
          tags: tags.split(',').map(tag => tag.trim()), // Split tags by comma and trim whitespace
      };
      // POST the meme data to the server
      fetch('https://memeteam-server.onrender.com/memes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(memeData),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to upload meme');
          }
          // Reset form fields
          setImage('');
          setCategory('');
          setTags('');
          // Redirect to the desired page after successful upload
          window.location.href = '/library';
          // Handle success
          console.log('Meme uploaded successfully');
      })
      .catch(error => {
          setError(error.message);
          console.error('Error uploading meme:', error);
      });
  };
  return (
    <div className='NavMenu'>
            <NavBar />

            <div className='page-header'>
                <h1></h1>
          <h2 >GIMME DAT MEME</h2>
          </div>
      <div className="upload-form">
          
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="image">Image Upload:</label>
                  <input type="text" id="image" value={image} onChange={handleImageChange} />
              </div>
              <div>
                  <label htmlFor="category">Category:</label>
                  <select id="category" value={category} onChange={handleCategoryChange}>
                      <option value="">Select Category</option>
                      <option value="celebrity">Celebrity</option>
                      <option value="sponge bob">Sponge Bob</option>
                      <option value="classics">Classics</option>
                      <option value="animals">Animals</option>
                      <option value="fail">Fail</option>
                      <option value="misc">Misc</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="tags">Tags:</label>
                  <input type="text" placeholder="Separate Tags by comma" id="tags" value={tags} onChange={handleTagsChange} />
                 
              </div>
              <button type="submit">Upload</button>
          </form>
          {error && <p>Error: {error}</p>}
      </div>
      </div>
  );
}

export default NewMemeForm;