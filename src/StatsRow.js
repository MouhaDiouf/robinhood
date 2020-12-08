import React from 'react';
import './StatsRow.css';
import StockChart from './stock.svg';

function StatsRow({ price, openPrice, volume, name }) {
  const percentage = ((price - openPrice) / openPrice) * 100;

  const getModal = () => {};
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{name}</h1>
        <p>{volume && volume + ' shares'}</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} alt="stock" />
      </div>
      <div className="row__numbers">
        <p className="row__price">{price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
