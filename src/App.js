
import Analytics from './components/analytics';
import Cards from './components/cards';
import Footer from './components/footer';
import Hero from './components/header';
import Navbar from './components/navabr';
import NewSletter from './components/newSletter';

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <NewSletter/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;
