import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Partners from './components/partners.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Partners />
    </div>
  );
}

