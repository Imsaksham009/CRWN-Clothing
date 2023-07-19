import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './context/user.context';
import { ProductContextProvider } from './context/productContext';
import { CartDropDownProvider } from './context/cart-dropdown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <UserContextProvider>
      <ProductContextProvider>
        <CartDropDownProvider>
          <RouterProvider router={App} />
        </CartDropDownProvider>
      </ProductContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

