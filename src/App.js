import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoToTop from './GoToTop/GoToTop';

import Profile from './PortfolioContainer/Home/Profile';


function App() {
  return (
    <>
      
    <div className="App">
       <Profile/>
    </div>
    <GoToTop />
    </>
  
  );
}

export default App;
