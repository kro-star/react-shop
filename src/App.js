import { GoodInfo } from './components/GoodInfo';
import {Shop} from './components/Shop';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { BrowserRouter, Route } from 'react-router-dom';

import { ContextProvider } from "./context";

function App() {
  return <>
    <Header />
    <ContextProvider>
      <Shop />
    </ContextProvider>
    <Footer />
  </>
  
  
}

export default App;

