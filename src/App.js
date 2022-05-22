import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/*<div className="container">*/}
        <Header />
        <Main />
        <Footer />
      {/*</div>*/}
    </div>
  );
}

export default App;
