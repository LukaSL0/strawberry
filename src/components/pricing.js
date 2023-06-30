import '../style/pricing.css';
import PricingLayout from './modules/pricing-layout.js';
import { useState } from "react";

export default function Pricing() {

    const [currency, setCurrency] = useState("R$");

    const trocando = (e) => {
        if (e.target.value === "1") {
            setCurrency("R$");
        } else if (e.target.value === "2") {
            setCurrency("$");
        }
    }

    return (
        <section>
            <div className="pricing" id="pricing">
                <div className="pricing-header">
                    <h1>PRICING</h1>
                    <select onChange={(e) => {trocando(e)}}>
                        <option disabled>Currency</option>
                        <option value="1">BRL</option>
                        <option value="2">USD</option>
                    </select>
                </div>
                <div className="pricing-boxes">
                    <PricingLayout type="Monthly" />
                    <PricingLayout type="Lifetime" />
                </div>
            </div>
        </section>
    )
}