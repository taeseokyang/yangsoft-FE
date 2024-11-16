import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
/* eslint-disable */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;