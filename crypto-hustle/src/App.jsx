import React, { useState, useEffect } from 'react';
import './App.css';
import CoinInfo from './Components/CoinInfo';

function App() {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=e3c99471144d34c8d67d7e96d88d9a2ad548761df97c7f6b138a584b0e55fcae`);
      const data = await response.json();
      setList(data.Data);
      setFilteredResults(Object.entries(data.Data));
    };
    fetchAllCoinData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.entries(list).filter(([key, { FullName }]) =>
        FullName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.entries(list));
    }
  };

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
        value={searchInput}
      />
      <ul>
        {(searchInput.length > 0 ? filteredResults : Object.entries(list || {})).map(([key, coin]) => (
          coin.CoinName && (
            <CoinInfo
              key={key}
              image={coin.ImageUrl}
              name={coin.FullName}
              symbol={coin.Name}
            />
          )
        ))}
      </ul>
    </div>
  );
}

export default App;
