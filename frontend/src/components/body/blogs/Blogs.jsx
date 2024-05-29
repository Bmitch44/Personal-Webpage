import React from 'react';
import './Blogs.css';

const Blogs = () => {
    const blogs = [
        {
            title: 'Coming Soon',
            description: 'This blog post is coming soon. Stay tuned for more updates.',
            details: 'Details',
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
                        <div className="blog-title-container">
                            <h3>{blog.title}</h3>
                            <div className='expand'>
                                <span>Read More</span>
                                <span className="arrow">&#8594;</span> {/* Right arrow character */}
                            </div>
                        </div>
                        <p>{blog.description}</p>
                        <p>{blog.details}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
