import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe'
import SimpleCard from './exercise4/simplecard';
import Header from './exercise5/Header';
import Navigation from './exercise5/Navigation';
import Content from './exercise5/Content';
import Footer from './exercise5/Footer';

function App() {  
  return (
    <>
    <AboutMe />
    <SimpleCard />
      <div>
      <h4 style={{ padding: '20px' }}>5. Create Simple Website</h4>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
    </>
  );
}

export default App;
