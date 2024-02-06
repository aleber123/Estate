import React, { useState, useEffect } from 'react';
import './Instagram.css';
import { FaPlay } from 'react-icons/fa';
import { IoIosPhotos } from 'react-icons/io';
import fontStyles from '../Fonts.module.css';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use the provided Cloud Run function URL
        const functionUrl = 'https://fetchinstagramdata-dwj345qyfq-uc.a.run.app';
        const response = await fetch(functionUrl);
        const data = await response.json();
        if (response.ok) {
          setPosts(data.data); // Ensure this matches the structure of your data
        } else {
          throw new Error(data.message || 'Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePhotos = () => {
    setShowMore(true);
  };

  const renderPhotos = () => {
    const columns = window.innerWidth >= 768 ? 3 : 2;
    const rows = window.innerWidth >= 768 ? 3 : 4;
    const photosToDisplay = showMore ? posts : posts.slice(0, columns * rows);

    return photosToDisplay.map(post => (
      <div key={post.id} className={`instagram-post ${columns === 2 ? 'two-columns' : ''}`}>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          <div className="media-wrapper">
            {post.media_type === 'VIDEO' ? (
              <>
                <div className="play-icon"><FaPlay /></div>
                <video controls>
                  <source src={post.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <img src={post.media_url} alt={post.caption || 'Instagram post'} />
            )}
            {post.media_type === 'CAROUSEL_ALBUM' && (
              <div className="multiple-photos-icon"><IoIosPhotos /></div>
            )}
          </div>
        </a>
      </div>
    ));
  };

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <div>
      <div className="instagram-feed">
        {renderPhotos()}
      </div>
      {!showMore && posts.length > 0 && (
        <div className="load-more-button-container">
          <button className={`${fontStyles.p} load-more-button`} onClick={loadMorePhotos}>
            More Properties
          </button>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
