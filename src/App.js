import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import TermsOfService from "./pages/user/TermsOfService";
import PrivacyPolicy from "./pages/user/PrivacyPolicy";
/* eslint-disable */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/terms-of-service" Component={TermsOfService} />
        <Route path="/privacy-policy" Component={PrivacyPolicy} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;