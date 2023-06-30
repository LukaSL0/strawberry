import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Partners from './components/partners.js';
import Features from './components/features.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Partners />
      <Features />
    </div>
  );
}

