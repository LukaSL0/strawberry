import '../style/pricing.css';
import Currency from './modules/pricing-currency';
import PricingLayout from './modules/pricing-layout.js';

export default function Pricing() {

    return (
        <section>
            <div className="pricing" id="pricing">
                <div className="pricing-header">
                    <h1>PRICING</h1>
                    <Currency />
                </div>
                <div className="pricing-boxes">
                    <PricingLayout type="Monthly" price="25" />
                    <PricingLayout type="Lifetime" price="90" />
                    <PricingLayout type="Monthly" price="70" />
                </div>
            </div>
        </section>
    )
}