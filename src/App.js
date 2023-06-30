import './App.css';
import Line from './components/modules/line.js';
import Header from './components/header.js';
import Home from './components/home.js';
import Partners from './components/partners.js';
import Features from './components/features.js';
import Pricing from './components/pricing.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Partners />
      <Features />
      <Pricing />
        <Line />
    </div>
  );
}

