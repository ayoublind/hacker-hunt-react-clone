import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Topics from './Topics';
import Article from './Article';
import Contact from './Contact';

class App extends Component {
  state = {
    articles: {},
    isLoaded: false,
    error: null,
    topics: ['Development', 'System', 'Tools', 'Data Science', 'Blockchain', 'Mobile', 'Awesome Lists', 'Social', 'Visual', 'Open Source', 'All Topics'],
    icons: ['🚀', '🛠️', '🎛️', '💽', '🔗', '📱', '✨', '🤙', '🖼️', '🍺', '🗃️'],
  }

  componentDidMount() {
    this.getArticles();
  };

  getArticles = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://hackerhunt.co/api/daily/0`)
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


  render() {
    const { articles, isLoaded } = this.state;
    const fadeIn = !isLoaded ? 'is-loading': 'is-loaded';

    return (
      <div className="App">
        <Header className="App__header" />
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
                  className="App__article" 
                />
              ))}
            </div>
          )}
        </div>
        <Contact className="contact" />
      </div>
    );
  }
}

export default App;
