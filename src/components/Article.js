import React from 'react';
import moment from 'moment';
import '../styles/Article.css';
import Sort from './Sort';
import ShowMore from './ShowMore';

class Article extends React.Component {
  state = {
    totalArticles: this.props.articles.length,
    displayed: 10,
    remaining: null,
  };
  
  componentDidMount() {
    this.updateRemaining();
  }

  updateRemaining = () => {
    const { totalArticles, displayed } = this.state;
    const remaining = totalArticles - displayed;
    this.setState({ remaining: remaining });
  }

  displayMore = () => {
    const { displayed, remaining } = this.state;
    const updateDisplayed = remaining >= 10 ? displayed + 10 : displayed + remaining;
    const updateRemaining = remaining <=10 ? 0 : remaining - 10;
    this.setState({
      displayed: updateDisplayed,
      remaining: updateRemaining,
    });
  }

  render() {
    const day = this.props.day === 0 ? 'today' : this.props.day === 1 ? 'a day ago' : `${this.props.day} days ago`;
    
      return (
        <div className="article">
          <section className="heading">
            <h4 className="article__heading">{day}</h4>
            <Sort 
              popularSort={this.props.popularSort} 
              commentSort={this.props.commentSort}
              newestSort={this.props.newestSort}
              sortedTitle={this.props.sortedTitle}
              notSorted={this.props.notSorted}
              newSelection={this.props.newSelection}
              day={this.props.day}
              className="article__sort"
            />
          </section>
          {this.props.articles.map((article, index, array) => {
            const { displayed } = this.state;
            const toDisplay = index + 1 <= displayed ? true : false;

            return (
              <div key={article.id}>
              {toDisplay && (
                <div className="article__grid"> 
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
                  <p className="article__time">{moment.unix(article.date).fromNow()} by <a href={`https://hackerhunt.co/author/${article.author}`} className="article__author">{article.author}</a></p>
                </div>
                )}
              </div>
            );
          })}
          {this.state.remaining > 0 && (
            <ShowMore 
              className="showmore"
              totalArticles={this.state.totalArticles}
              displayed={this.state.displayed}
              remaining={this.state.remaining} 
              displayMore={this.displayMore}
            />
          )}
        </div>
    );
  }
}

export default Article;
