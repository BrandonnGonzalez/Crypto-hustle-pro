import React, { useState, useEffect } from 'react';

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const getCoinPrice = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=e3c99471144d34c8d67d7e96d88d9a2ad548761df97c7f6b138a584b0e55fcae`);
      const data = await response.json();
      setPrice(data.USD);
    };
    getCoinPrice();
  }, [symbol]);

  return (
    <li className="coin-info">
      <img src={`https://www.cryptocompare.com${image}`} alt={`Icon of ${name}`} />
      <span>{name} ({symbol}) - ${price} USD</span>
    </li>
  );
};

export default CoinInfo;
