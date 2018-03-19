import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Topics from './Topics';
import Article from './Article';

class App extends Component {
  state = {
    topics: ['Development', 'System', 'Tools', 'Data Science', 'Blockchain', 'Mobile', 'Awesome Lists', 'Social', 'Visual', 'Open Source', 'All Topics'],
    icons: ['🚀', '🛠️', '🎛️', '💽', '🔗', '📱', '✨', '🤙', '🖼️', '🍺', '🗃️'],
  }


  render() {
    return (
      <div className="App">
        <Header className="App__header" />
        <Topics 
          topics={this.state.topics} 
          icons={this.state.icons}
          className="App__topics"  
        />
        <Article className="App__article" />
      </div>
    );
  }
}

export default App;
