import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
 <Footer/>
 <Main/>
 <Form/>
 <ToastContainer/>
    </div>
  );
}

export default App;
