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
    this.getArticles(day);
  }


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
