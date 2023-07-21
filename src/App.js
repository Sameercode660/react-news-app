import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
function App() {
  return (
    
     <>
       <Navbar/>
       <div className="container">
        <News></News>
        
       </div>
     </>
  );
}

export default App;
