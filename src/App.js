import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Section from "./pages/user/Section";
import Article from "./pages/user/Article";
import Reporter from "./pages/user/Reporter";
import AboutUs from "./pages/user/AboutUs";
import ContactUs from "./pages/user/ContactUs";
/* eslint-disable */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/section/:sectionId" Component={Section} />
        <Route path="/article/:articleId" Component={Article} />
        <Route path="/reporter/:reporterId" Component={Reporter} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/contactus" Component={ContactUs} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;