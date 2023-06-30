import { SelectedCurrency } from "./pricing-currency.js";

export default function PricingLayout(props) {

    const currency = SelectedCurrency();

    const price = () => {
        return currency === "R$" ? props.price : (props.price / 5);
    }

    const time = () => {
        return props.type === "Monthly" ? "/monthly" : "/lifetime";
    }

    return (
        <div className="pricing-box">
            <div className="pricing-box-header">
                <h2>{props.type}</h2>
            </div>
            <div className="pricing-box-info">
                <span className="moeda">{currency}</span>
                <span className="valor">{price(props.price)}</span>
                <span className="tempo">{time(props.type)}</span>
            </div>
            <div className="pricing-box-body">
                <ul>
                    <li>Unique System</li>
                    <li>1100+ Strings</li>
                    <li>Unlimited PIN's</li>
                    <li>30d Access</li>
                    <li>Discord Panel</li>
                    <li>Weekly Updates</li>
                    <li>1 User</li>
                </ul>
                <a href="#purchase-link">PURCHASE</a>
            </div>
        </div>
    )
}