// Write your JS code here
import './index.css'

const CrytocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    euroValue,
    usdValue,
  } = cryptocurrencyDetails
  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container">
        <img className="logo-image" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CrytocurrencyItem
