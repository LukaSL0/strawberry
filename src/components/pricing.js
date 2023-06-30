import '../style/pricing.css';
import Currency from './modules/pricing-currency.js';
import PricingLayout from './modules/pricing-layout';

export default function Pricing() {

    return (
        <section>
            <div className="pricing" id="pricing">
                <div className="pricing-header">
                    <h1>PRICING</h1>
                    <Currency />
                </div>
                <div className="pricing-boxes">
                    <PricingLayout />
                </div>
            </div>
        </section>
    )
}