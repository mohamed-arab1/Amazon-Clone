import { 
        createHashRouter,
        createRoutesFromElements,
        Outlet,
        Route,
        RouterProvider,
        ScrollRestoration
      } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import { fetchProducts } from './api/api';
import Cart from './pages/Cart';
import Signin from './pages/Signin'
import Registration from './pages/Registration';
const LayOut = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {

  const router = createHashRouter(
    createRoutesFromElements(
        <Route>
          <Route path='/' element={<LayOut />}>
            <Route index element={<Home />} loader={fetchProducts}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
        </Route>
    )
  )

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
