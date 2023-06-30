import { SelectedCurrency } from "./pricing-currency.js";

export default function PricingLayout(props) {

    const currency = SelectedCurrency();
    const desc = props.desc.split(';');

    const price = () => {
        if (props.price === "??") {
            return props.price;
        } else {
            return currency === "R$" ? props.price : (props.price / 5);
        }
    }

    const time = () => {
        return props.type === "Lifetime" ? "/lifetime" : "/monthly";
    }
    const button = () => {
        return props.price === "??" ? "DISCORD" : "PURCHASE";
    }

    const List = [];
    
    for (let i = 0; i < desc.length; i++) {
        List.push(<li key={i}>{desc[i]}</li>);
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
                    {List}
                </ul>
                <a href="#purchase-link">{button()}</a>
            </div>
        </div>
    )
}