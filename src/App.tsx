import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

const App = () => {
  // const { t } = useTranslation(["translation"]);

  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
