import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin as Loader } from 'react-loader-spinner';
import './index.css';

const BlogItemDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBlogItemData = async () => {     
      
      try {               
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
        const data = await response.json();
        const updatedData = {
          title: data.title,
          imageUrl: data.image_url,
          content: data.content,
          avatarUrl: data.avatar_url,
          author: data.author,
        };
        setBlogData(updatedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching blog item:', error);
        setIsLoading(false);
      }
    };

    getBlogItemData();
  }, [id]);

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="blog-container">
      {isLoading ? (
        <div data-testid="loader" className='loader-container'>
          <Loader color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  );
};

export default BlogItemDetails;
