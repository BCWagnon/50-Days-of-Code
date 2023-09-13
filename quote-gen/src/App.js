import "./App.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div className="Quote">
        <h3>“{quote?.text}"</h3>
        <i>- {quote?.author}</i>
        <button onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  );
}
