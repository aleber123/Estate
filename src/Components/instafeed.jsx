import React, { useState, useEffect } from 'react';
import './Instagram.css';
import { FaPlay } from 'react-icons/fa';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQWRPVkN3YTltaU5fUGdheUxCbEhESWJ5NHdyOFB5YVFUYlZAzblJlNE9ybVRiT1lMekRndHRvbkNiejVkbzhGbjU2Y0RWYVZA1MGt3S0tzVWFRLWNVdGNybEx2dndwYThVZAVBIcmtJcmdiQ09ZAcFdqYjNmZAjh2OFEZD`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePhotos = () => {
    // You can implement the logic to load more photos here
    // For now, let's just show all posts
    setShowMore(true);
  };

  const renderPhotos = () => {
    const columns = window.innerWidth >= 768 ? 3 : 2; // Adjusted for mobile (2 columns)
    const rows = window.innerWidth >= 768 ? (window.innerHeight >= 768 ? 3 : 3) : 4; // Adjusted for mobile (4 rows)
    const photosToDisplay = showMore ? posts : posts.slice(0, columns * rows);

    return photosToDisplay.map(post => (
      <div key={post.id} className={`instagram-post ${columns === 2 ? 'two-columns' : ''}`}>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          <div className="media-wrapper">
            {post.media_type === 'VIDEO' ? (
              <>
                <div className="play-icon"><FaPlay /></div>
                <video>
                  <source src={post.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <img src={post.media_url} alt={post.caption || 'Instagram post'} />
            )}
          </div>
        </a>
      </div>
    ));
  };

  return (
    <div>
      <div className="instagram-feed">
        {renderPhotos()}
      </div>
      {!showMore && (
        <div className="load-more-button-container">
          <button className="load-more-button" onClick={loadMorePhotos}>
            More Properties
          </button>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;