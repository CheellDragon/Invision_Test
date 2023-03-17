import './App.css';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Loyalty from './components/Loyalty/Loyalty';
import Sums from './components/Sums/Sums';
import TradeGroup from './components/TradeGroup/TradeGroup';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Loyalty />
      <Sums />
      <TradeGroup />
      <Footer />
    </div>
  );
}

export default App;
