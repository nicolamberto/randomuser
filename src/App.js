import './App.css';
import ContextProvider from './components/context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormUser from './components/FormUser';
import RandomUser from './components/RandomUser';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<FormUser/>} />
          <Route path={"/users"} element = {<RandomUser/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
      
    
  );
}

export default App;
