// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CrytocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {CryptocurrenyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyDetails()
  }

  getCryptocurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    console.log(formattedData)
    this.setState({CryptocurrenyData: formattedData, isLoading: false})
  }

  render() {
    const {CryptocurrenyData, isLoading} = this.state

    return (
      <div className="crypto-currency-main-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrencies-list-container">
            <div className="list-header">
              <p className="list-coin-type-heading">Coin Type</p>
              <div className="usd-and-euro-values-container">
                <p className="list-coin-value-heading">USD</p>
                <p className="list-coin-value-heading">EURO</p>
              </div>
            </div>

            <ul className="cryptocurrencies-list">
              {CryptocurrenyData.map(eachData => (
                <CrytocurrencyItem
                  cryptocurrencyDetails={eachData}
                  key={eachData.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
