import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reason from './components/reason/Reason';
import Testimonial from './components/testimonial/Testimonial';
function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reason />
         <Plans />
         <Testimonial />
         <Join />
         <Footer />

    </div>
  );
}

export default App;
