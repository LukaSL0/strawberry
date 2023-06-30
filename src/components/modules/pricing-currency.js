import { useState } from "react";
import { useBetween } from "use-between";

export default function Currency() {

    return (
        <select id="trocar-moeda">
            <option selected disabled value="">Currency</option>
            <option value="1">BRL</option>
            <option value="2">USD</option>
        </select>
    )
}