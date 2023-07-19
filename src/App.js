import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./Routes/Error/error.component";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/Navigation/navigation.component";
import Auth from "./Routes/Auth/auth.components";
import ShopPage from "./Routes/Shop/shoppage";


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} errorElement={<ErrorPage />} >
      <Route index element={<Home />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="about" element={<h1>About Page</h1>} />
      <Route path="signIn" element={<Auth />} />


    </Route>
  )
);


export default App;