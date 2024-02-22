import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import DetailsOfBlogItem from './components/DetailsOfBlogItem';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">                   
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />            
              <Route exact path="/blogs/:id" element={<DetailsOfBlogItem />} />
            </Routes>                    
        </div>
      </div>
    </div>
  );
};

export default App;


