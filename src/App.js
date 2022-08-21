import { Home } from "./routes/home/home.component";
import { Routes, Route } from 'react-router-dom';
import { Shop } from "./components/shop/shop.component";

import { Navigation } from "./routes/navigation/navigation.component";
import { SignIn } from "./routes/sign-in/signIn.component";
import { SignUp } from "./components/sign-up/sign-up.component";

const App = () => {

  console.log("Inside App");
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
