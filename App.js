import axios from 'axios'
import {useEffect, useState} from 'react'
import './App.css';
import Coin from './components/coinItem/Coin';

function App() {
  const [coins, setCoins] = useState([])
  const [searched, setSearched] = useState('')

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=21&page=1&sparkline=false')
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(`There has been an ${error}`))
  }, [])

  const handledChange = (e) => {
    setSearched(e.target.value)
  }

  const filteredCoins = coins.filter((coin => coin.name.toLowerCase().includes(searched.toLowerCase())))

  return (
    <div>
      <div className="header">
        <h1 className='title'>< i className ="fas fa-coins"></i>Crypto Coins</h1>
        <form>
          <input className= 'inputField' type='text' onChange={handledChange} placeholder='Search for a Coin' />
        </form>
      </div>
      <div className="coinsContainer">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              rank={coin.market_cap_rank}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              valuation={coin.fully_diluted_valuation}
              circulatingsupply = {coin.circulating_supply}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
