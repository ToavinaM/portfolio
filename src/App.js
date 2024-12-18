import About from './about/About';
import './App.css';
import Banner from './banner/Banner';
import Chatbot from './ChatBot/ChatBot';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <div className="App">


      <Header></Header>
      <Banner></Banner>
      {/* <br></br>/ */}
      {/* <Contact></Contact> */}
      <Chatbot></Chatbot>
      <About></About>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default App;
