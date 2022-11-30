import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './usePostsApi';
import FetchComp from './FetchComp/FetchComp';
import AxiosComp from './AxiosComp/AxiosComp';
import NavBar from './navs/NavBar';


function App() {
  return (
      <Router>
         
        <NavBar/>
        <Routes>
          <Route index path='/' element={<Index/>} />
          <Route path='/FetchComp' element={<FetchComp/>} />
          <Route path='/AxiosComp' element={<AxiosComp/>} />
        </Routes>
      </Router>
  );
}

export default App;
