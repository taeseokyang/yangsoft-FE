import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Section from "./pages/user/Section";
import Article from "./pages/user/Article";
/* eslint-disable */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/section/:section" Component={Section} />
        <Route path="/article/:articleId" Component={Article} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;