import React from 'react';
import LineGraph from './LineGraph';
import './NewsFeed.css';
function NewsFeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$115,670</h1>
            <p>$39.65(+0.06%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
