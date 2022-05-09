import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import InventoryItem from './components/InventoryItem/InventoryItem';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import AddItem from './components/Home/Products/AddItem/AddItem';
import MyItem from './components/MyItem/MyItem';
import Manage from './components/Manage/Manage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventoryItem' element={<RequireAuth>
          <InventoryItem></InventoryItem>
        </RequireAuth>}></Route>

        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/manage' element={<Manage></Manage>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
