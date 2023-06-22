import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Categories from "./components/category/categories.components";

const App = () => {
  return (
    <div>
      <Categories></Categories>
    </div>
  );
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
    </>
  )
);

export default router;