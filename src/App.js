import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./Routes/Error/error.component";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/Navigation/navigation.component";
import Auth from "./Routes/Auth/auth.components";


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} errorElement={<ErrorPage />} >
      <Route index element={<Home />} />
      <Route path="shop" element={<h1>Shop Page</h1>} />
      <Route path="about" element={<h1>About Page</h1>} />
      <Route path="signIn" element={<Auth />} />


    </Route>
  )
);


export default App;