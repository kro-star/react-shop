import { GoodInfo } from './components/GoodInfo';
import {Shop} from './components/Shop';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <Shop /> 
    
  
}

export default App;

/*return <BrowserRouter>
      <Routes>            
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<GoodInfo />} />
      </Routes>
    </BrowserRouter> */
