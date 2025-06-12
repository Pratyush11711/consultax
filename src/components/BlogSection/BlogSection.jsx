import React from 'react';
import './BlogSection.css';

const blogData = [
  {
    image: '/blogimg/blog4.jpg',
    date: 'September 11, 2017',
    category: 'Consulting',
    title: 'Solution financial for good startup',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ad, tincidunt senectus felis platea natoque mattis....',
  },
  {
    image: '/blogimg/blog2.jpg',
    date: 'September 11, 2017',
    category: 'Consulting',
    title: 'Cutting Your Restaurant’s Operations Costs',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ad, tincidunt senectus felis platea natoque mattis....',
  },
  {
    image: '/blogimg/blog1.jpg',
    date: 'September 11, 2017',
    category: 'Consulting',
    title: 'Why Tech Should Behave More Like Finance',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ad, tincidunt senectus felis platea natoque mattis....',
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="header">
        <p className="sub-title">OUR BLOG</p>
        <div className="title-row">
          <h2>Our latest news</h2>
          <a href="#" className="view-all">View all posts</a>
        </div>
      </div>

      <div className="blog-cards">
        {blogData.map((blog, index) => (
          <div className="card" key={index}>
            <img src={blog.image} alt="blog" className="card-image" />
            <div className="card-content">
              <p className="meta">
                {blog.date} &nbsp; | &nbsp; <span className="category">{blog.category}</span>
              </p>
              <h3 className="card-title">{blog.title}</h3>
              <p className="card-excerpt">{blog.excerpt}</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
