import React from 'react';
import '../styles/ShowMore.css';

const ShowMore = (props) => {
  const remainingArticles = props.remaining >= 10 ? 10 : props.remaining;
  
  return (
    <div className="showmore" onClick={props.displayMore}>
      <p>Show {remainingArticles} more</p> 
    </div>
  );
};

export default ShowMore;
