import React from 'react';
import { db } from './firebase';
import './StatsRow.css';
import StockChart from './stock.svg';

function StatsRow({ price, openPrice, volume, name }) {
  const percentage = ((price - openPrice) / openPrice) * 100;

  const getModal = () => {
    db.collection('myStocks')
      .where('ticker', '==', name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            db.collection('myStocks')
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
          });
        } else {
          db.collection('myStocks').add({
            ticker: name,
            shares: 1,
          });
        }
      });
  };
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
