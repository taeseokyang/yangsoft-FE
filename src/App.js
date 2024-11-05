import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Section from "./pages/user/Section";
import Article from "./pages/user/Article";
import Reporter from "./pages/user/Reporter";
import AboutUs from "./pages/user/AboutUs";
import ContactUs from "./pages/user/ContactUs";
import Login from "./pages/user/Login";
import ReportersPage from "./pages/user/ReportersPage";
import Archive from "./pages/user/Archive";
import AddArticle from "./pages/user/AddArticle";
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
        <Route path="/login" Component={Login} />
        <Route path="/reporter/manage" Component={ReportersPage} />
        <Route path="/archive" Component={Archive} />
        <Route path="/add" Component={AddArticle} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;