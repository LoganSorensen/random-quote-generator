import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { Route, Link } from "react-router-dom";

import SingleQuote from "./components/singleQuote";
import QuotesByAuthor from "./components/quotesByAuthor";

import "./App.css";

function App() {
  const [quote, setQuote] = useState({});

  const getQuote = () => {
    setQuote({});
    axios
      .get(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
      .then((res) => {
        setQuote(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <header>
        <Link to="/">
          <button className="random-btn" onClick={getQuote}>
            random
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </Link>
      </header>
      {quote !== {} && (
        <Route exact path="/">
          <SingleQuote quote={quote} />
        </Route>
      )}
      <Route path="/author/:authorName">
        <QuotesByAuthor />
      </Route>
    </div>
  );
}

export default App;
