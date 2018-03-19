import React from 'react';
import '../styles/Article.css';

const Article = props => (
  <div className="article">
    <h4 className="article__heading">Today</h4>
    {props.articles.map(article => (
      <div key={article.id} className="article__grid">
        <a href={article.link} target="_blank" className="article__votes">
          <h3 className="votes">▲ {article.votes}</h3>
          <p className="comments"><span role="img" aria-label="talking bubble">💬</span> {article.comments}</p>
        </a>
        <h3 className="article__title">
          <a href={article.link} target="_blank">{article.title}</a> <span className="star" title="This submission has been on Hacker News front page">{article.featured >= 1 ? '★' : null}</span>
        </h3>
        <p className="article__desc">
          {article.desc || article.link}
        </p>
        <p className="article__time">3 hours ago by <a href={`https://hackerhunt.co/author/${article.author}`} className="article__author">{article.author}</a></p>
      </div>
    ))} 
  </div>
);

export default Article;
