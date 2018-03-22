import React from 'react';
import '../styles/Article.css';
import Sort from './Sort';

const Article = (props) => {
  const day = props.day === 0 ? 'today' : props.day === 1 ? 'a day ago' : `${props.day} days ago`;
  
    return (
      <div className="article">
        <section className="heading">
          <h4 className="article__heading">{day}</h4>
          <Sort 
            popularSort={props.popularSort} 
            commentSort={props.commentSort}
            newestSort={props.newestSort}
            sortedTitle={props.sortedTitle}
            notSorted={props.notSorted}
            newSelection={props.newSelection}
            className="article__sort"
          />
        </section>
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
};

export default Article;
