import React, { useEffect, useState } from 'react';
import './Stats.css';
const token = 'bv7nk9n48v6u3srnuuv0';
const url = 'https://finnhub.io/api/v1/quote';
function Stats() {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const getStockData = async (symbol) => {
      const res = await fetch(`${url}?symbol=${symbol}&token=${token}`);
      const data = await res.json();
      setStockData(data);
    };
    getStockData();
  }, []);
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* Current stocks */}</div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* Stocks we can buy */}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
