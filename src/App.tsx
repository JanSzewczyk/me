import { useTranslation } from "react-i18next";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const { t } = useTranslation(["translation"]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("title")}
          <br />
          Jan Robert Szewczyk
          <br />
          The Best Web Developer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
