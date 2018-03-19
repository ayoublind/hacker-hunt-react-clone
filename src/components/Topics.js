import React from 'react';
import '../styles/Topics.css';

const Topics = props => (
  <div>
    <h4 className="topics__heading">Topics</h4>
    {props.icons.map((icon, index) => (
      <div key={index} className="topics">
        <p className="topics__topic"><span className="topics__icon">{icon}</span> {props.topics[index]}</p>
      </div>
    ))}
  </div>
);

export default Topics;

