import '../style/header.css';
import { useRef } from "react";

export default function Header() {

    const mobile = useRef();
    const toggle = () => {
        mobile.current.classList.toggle("toggle");
    }

    return (
        <header>
            <h1>STRAWBERRY</h1>
            <div className="burgericon">
                <div className="burgeroptns" ref={mobile}>
                <li><a href="#home" onClick={() => {toggle()}}>Home</a></li>
                    <li><a href="#features" onClick={() => {toggle()}}>Features</a></li>
                    <li><a href="#pricing" onClick={() => {toggle()}}>Pricing</a></li>
                </div>
                <input type="checkbox" className="toggler" onClick={() => {toggle()}} aria-label="Burger" />
                <div className="hamburger"><div></div></div>
            </div>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li className="discordbtn"><a href="#discord-link">Discord</a></li>
                </ul>
            </nav>
        </header>
    )
}