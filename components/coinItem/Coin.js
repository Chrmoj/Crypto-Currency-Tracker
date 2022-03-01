import React from 'react'
import './Coin.css'

const Coin = ({name, price, rank, symbol, marketcap, volume, image, priceChange, valuation, circulatingsupply}) => {
    return (
        <div className='cryptoCoin'>
            <img src={image} alt="" className='coinLogo'/>
            <div className='coinNameWrap'>
                <h1 className='coinName'>{name}</h1>
                <p className="coinSymbol">{symbol}</p>
            </div>
            <p className="coinMarketCapRank">
               Market Cap Rank: {rank}
            </p>
            <p className="coinPrice">Current Price: ${price.toLocaleString()}</p>
            <p className="coinMarketCap">
                Market Cap: ${marketcap.toLocaleString()}
            </p>
            <p className="coinVolume">
                Volume (24H): ${volume.toLocaleString()}
            </p>
            <p className="fullyDilutedValuation">
                Fully Diluted Valuation: ${valuation}
            </p>
            <p className="circulatingsupply">
                Circulating Supply: {circulatingsupply}
            </p>
            {priceChange < 0 ? (
                <div className="priceContainerDown">
                    <i className='fas fa-angle-down fa-2x'></i>
                    <p className="priceChange">{priceChange.toFixed(2)}%</p>
                </div>
            ) : (
                <div className="priceContainerUp">
                    <i className='fas fa-angle-up fa-2x'></i>
                    <p className="priceChange">{priceChange.toFixed(2)}%</p>
                </div>
            )}
        </div>
    )
}

export default Coin
