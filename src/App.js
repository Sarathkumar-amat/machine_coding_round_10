import './App.css';
import {Routes,Route} from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { SideBar } from './components/SideBar';
import { Departments } from './pages/Departments';
import { Products } from './pages/Products';
import { NewProduct } from './pages/NewProduct';
import { IndividualProduct } from './pages/IndividualProduct';

function App() {
  return (
    <div className="App">
      <div className='sidebar-route'>
        <SideBar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/departments" element={<Departments />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/productDetail/:prodId" element={<IndividualProduct />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
