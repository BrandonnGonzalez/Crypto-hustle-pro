import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const { symbol } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${symbol}&tsym=USD&api_key=e3c99471144d34c8d67d7e96d88d9a2ad548761df97c7f6b138a584b0e55fcae`
      );
      const data = await response.json();
      setCoinDetails(data.Data[0].CoinInfo);
    };
    fetchCoinDetails();
  }, [symbol]);

  if (!coinDetails) return <div>Loading...</div>;

  return (
    <div>
      <img src={`https://www.cryptocompare.com${coinDetails.ImageUrl}`} alt={coinDetails.FullName} />
      <h1>{coinDetails.FullName}</h1>
      <p>Symbol: {coinDetails.Name}</p>
      <p>Algorithm: {coinDetails.Algorithm}</p>
      <p>Launch Date: {coinDetails.AssetLaunchDate || "N/A"}</p>
      <p>Website: <a href={coinDetails.AssetWebsiteUrl} target="_blank" rel="noreferrer">{coinDetails.AssetWebsiteUrl}</a></p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CoinDetail;
