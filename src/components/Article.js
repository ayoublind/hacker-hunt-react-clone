import React, { Component } from 'react';
import '../styles/Article.css';

class Article 
extends Component {
  render() {
    return (
      <div className="article">
        <h4 className="article__heading">Today</h4>
        <div className="article__grid">
          <a href="#" target="_blank" className="article__comments">
            <h3 className="count">▲ 3</h3>
            <p className="comments"><span role="img" aria-label="talking bubble">💬</span> 0</p>
          </a>
          <h3 className="article__title">
            <a href="#" target="_blank">Article Title</a>
          </h3>
          <p className="article__desc">
            This will be a brief description of the article.
          </p>
          <p className="article__time">3 hours ago by <a href="#" className="article__author">someauthor</a></p>
        </div>
      </div>
    );
  }
}

export default Article;
