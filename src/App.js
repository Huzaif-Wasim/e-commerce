import { Home } from "./routes/home/home.component";
import { Routes, Route } from 'react-router-dom';
import { Shop } from "./components/shop/shop.component";

import { Navigation } from "./routes/navigation/navigation.component";

const App = () => {

  console.log("Inside App");
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
