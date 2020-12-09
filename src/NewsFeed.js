import { Avatar, Chip } from '@material-ui/core';
import React, { useState } from 'react';
import LineGraph from './LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine';

function NewsFeed() {
  const [popularTopics, setPopularTopics] = useState([
    'Technology',
    'Top Movies',
    'Upcomin Earnings',
    'Crypto',
    'Cannabis',
    'Healthcare Supplies',
    'Index ETFs',
    'China',
    'Pharma',
  ]);
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
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
