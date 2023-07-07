import React from 'react'
// import Product from './components/product'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/Home'
import store from './store/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <>
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
            <Routes>

              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>

            </Routes>

          </BrowserRouter>
        </Provider>


      </div>

    </>

  )
}

export default App