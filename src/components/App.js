import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Topics from './Topics';
import Article from './Article';
import Contact from './Contact';
import Previous from './Previous';

class App extends Component {
  state = {
    articles: {},
    isLoaded: false,
    error: null,
    day: 0,
    sorted: 'newest',
    notSorted: ['popular', 'comments', null],
    topics: ['Development', 'System', 'Tools', 'Data Science', 'Blockchain', 'Mobile', 'Awesome Lists', 'Social', 'Visual', 'Open Source', 'All Topics'],
    icons: ['🚀', '🛠️', '🎛️', '💽', '🔗', '📱', '✨', '🤙', '🖼️', '🍺', '🗃️'],
  }

  componentDidMount() {
    this.getArticles(this.state.day);
  };

  getArticles = (day) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://hackerhunt.co/api/daily/${day}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
  };

  previousDay = () => {
    const day = this.state.day;
    const previous = day + 1;
    this.setState({ day: previous, isLoaded: false, });
    this.getArticles(previous);
  };

  returnHome = () => {
    const day = 0;
    this.setState({ day, isLoaded: false, });
    this.props.location.pathname = "/";
    this.getArticles(day);
  };

  popularSort = () => {
    const state = { ...this.state.articles };
    const popular = state.data.sort((a, b) => {
      return a.votes > b.votes ? -1 : 1;
    });
    console.log(popular);
    this.setState({ articles: { popular } });
  };

  newestSort = () => {
    const state = { ...this.state.articles };
    const newest = state.data.sort((a, b) => {
      return b.date > a.date ? 1 : -1;
    });
    console.log(newest);
    this.setState({ articles: { newest } });
  };

  commentSort = () => {
    const state = { ...this.state.articles };
    const comments = state.data.sort((a, b) => {
      return a.comments > b.comments ? -1 : 1;
    });
    console.log(comments);
    this.setState({ articles: { comments } });
  };


  render() {
    const { articles, isLoaded } = this.state;
    const fadeIn = !isLoaded ? 'is-loading': 'is-loaded';

    return (
      <div className="App">
        <Header className="App__header" returnHome={this.returnHome} />
        <Topics 
          topics={this.state.topics} 
          icons={this.state.icons}
          className="App__topics"  
        />
        {!isLoaded && (
          <h2 className="loading">Loading...</h2>
        )}
        <div className={fadeIn}>
          {isLoaded && (
            <div>
              {Object.keys(articles).map(key => (
                <Article 
                  key={key}
                  articles={articles[key]}
                  day={this.state.day}
                  className="App__article" 
                  popularSort={this.popularSort}
                  commentSort={this.commentSort}
                  newestSort={this.newestSort}
                  sorted={this.state.sorted}
                  notSorted={this.state.notSorted}
                />
              ))}
            </div>
          )}
          <Previous 
            className="previous" 
            previousDay={this.previousDay} 
            day={this.state.day}
          />
        </div>
        <Contact className="contact" />
      </div>
    );
  }
}

export default App;
