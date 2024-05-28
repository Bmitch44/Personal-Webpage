import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      title: 'Understanding React Hooks',
      description: 'An in-depth look at React hooks and how to use them effectively in your projects.',
      details: 'Detailed information about using React hooks including useState, useEffect, and custom hooks.',
      link: '#'
    },
    {
      title: 'Getting Started with Python',
      description: 'A beginner-friendly guide to getting started with Python programming.',
      details: 'Detailed information on setting up Python, writing your first program, and exploring basic concepts.',
      link: '#'
    },
    {
      title: 'Building RESTful APIs with Flask',
      description: 'Learn how to build RESTful APIs using the Flask framework in Python.',
      details: 'Detailed information about setting up Flask, defining endpoints, and handling requests and responses.',
      link: '#'
    },
    {
      title: 'Exploring Machine Learning with TensorFlow',
      description: 'An introduction to machine learning using the TensorFlow library.',
      details: 'Detailed information on setting up TensorFlow, building simple models, and understanding key concepts.',
      link: '#'
    },
    {
      title: 'Deploying Applications with Docker',
      description: 'A guide to containerizing your applications using Docker.',
      details: 'Detailed information about Docker, creating Dockerfiles, and deploying containers.',
      link: '#'
    }
  ];

  return (
    <div className="blogs-container">
      <h2>My Blogs</h2>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card-large" key={index}>
            <div className="blog-details-large">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <p>{blog.details}</p>
              <a href={blog.link} className="blog-link-large">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
