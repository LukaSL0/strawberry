import { useBetween } from 'use-between';
import { useState } from 'react';

const ShareState = () => {
    const [currency, setCurrency] = useState("R$");
    return {currency, setCurrency};
}

export function SelectedCurrency() {
    const { currency } = useBetween(ShareState);
    return currency;
}

export default function Currency() {

    const { setCurrency } = useBetween(ShareState);

    const trocando = (e) => {
        if (e.target.value === "1") {
            setCurrency("R$");
        } else if (e.target.value === "2") {
            setCurrency("$");
        }
    }

    return (
        <select onChange={(e) => {trocando(e)}}>
            <option disabled>Currency</option>
            <option value="1">BRL</option>
            <option value="2">USD</option>
        </select>
    )
}