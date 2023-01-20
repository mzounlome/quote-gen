import "./App.css";

import React, { useState } from "react";
import { getbyauthor, randomQuote } from "randomquote-api";

import AuthorDisplay from "./components/Authors/AuthorDisplay";
import QuotesDisplay from "./components/Quotes/QuotesDisplay";
import RandomBtn from "./components/Button/RandomBtn";

function App() {
  const [currentQuote, setCurrentQuote] = useState(randomQuote());
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const handleRandomQuote = () => {
    setCurrentQuote(randomQuote());
  };

  const handleAuthorQuotes = (name) => {
    setAuthorQuotes(getbyauthor(name, 5));
  };
  console.log(authorQuotes);
  return (
    <div className="App">
      <RandomBtn
        handleRandomQuote={handleRandomQuote}
        setAuthorQuotes={setAuthorQuotes}
      />
      <QuotesDisplay currentQuote={currentQuote} authorQuotes={authorQuotes} />
      <AuthorDisplay
        currentQuote={currentQuote}
        handleAuthorQuotes={handleAuthorQuotes}
      />
    </div>
  );
}

export default App;
