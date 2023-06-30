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
                    <PricingLayout type="Monthly" price="25" desc="Unique System;1100+ Strings;Unlimited PIN's;30d Access;Discord Panel;Weekly Updates;1 User" />
                    <PricingLayout type="Lifetime" price="90" desc="Unique System;1100+ Strings;Unlimited PIN's;Lifetime Access;Discord Panel;Weekly Updates;1 User" />
                    <PricingLayout type="Enterprise" price="??" desc="Min 5 Users;Max 25 Users;1100+ Strings;Unlimited PIN's;30d Access;Discord Panel;Weekly Updates;" />
                </div>
            </div>
        </section>
    )
}