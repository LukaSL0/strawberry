export default function PricingLayout() {

    return (
        <div className="pricing-box">
            <div className="pricing-box-header">
                <h2>Monthly</h2>
            </div>
            <div className="p-items">
                <span className="moeda" id="moeda-mes">R$</span>
                <span className="valor" id="preco-mes">15</span>
                <span className="tempo">/monthly</span>
            </div>
            <div className="p-body">
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