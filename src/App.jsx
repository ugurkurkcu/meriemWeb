import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/Home";
import PoliciesScreen from "./screens/PoliciesScreen";
import TermsScreen from "./screens/TermsScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policies" element={<PoliciesScreen />} />
        <Route path="/terms-of-use" element={<TermsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
