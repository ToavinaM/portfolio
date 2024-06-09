import About from './about/About';
import './App.css';
import Banner from './banner/Banner';
import Content from './content/Content';
import Experience from './experience/Experience';
import Footer from './footer/Footer';
import FormParticipation from './form/formParticipation';
import Header from './header/Header';

function App() {
  return (
    <div className="App">

      {/* <FormParticipation></FormParticipation> */}

      <Header></Header>
      <Banner></Banner>
      {/* <br></br>/ */}
      <About></About>
      {/* <Content></Content> */}
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default App;
