import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Previous.css';

const Previous = props => (
  <div>
    <Link to={`/page/${props.day + 1}`} className="link">
      <button 
        onClick={props.previousDay}
        className="previous"
      >Previous Day
      </button>
    </Link>
  </div>
);

export default Previous;
