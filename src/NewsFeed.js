import React from 'react';
import LineGraph from './LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine';
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
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2>Buying Power</h2>
          <h2>$5.36</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p>Markets Closed</p>
            <h1>Happy Thanksgiving</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
