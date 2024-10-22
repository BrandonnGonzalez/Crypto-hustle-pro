import { Link } from "react-router-dom";

const CoinInfo = ({ name, symbol, image }) => {
  return (
    <li className="coin-info">
      <img src={`https://www.cryptocompare.com${image}`} alt={name} />
      <Link to={`/coinDetails/${symbol}`} style={{ color: 'white' }}>
        {name} <span className="tab"></span>
      </Link>
    </li>
  );
};

export default CoinInfo;
