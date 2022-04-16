import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({
    quote: "",
    auothor: "",
  });

  useEffect(() => {
    const getRandomQuote = async () => {
      setLoading(true);
      const res = await axios.get("https://api.quotable.io/random");
      setQuote({ ...quote, quote: res.data.content, author: res.data.author });
      console.log(res.data.content);
      setLoading(false);
    };
    getRandomQuote();
  }, []);
  return (
    <div className="quote">
      {loading && <h2>Loading</h2>}
      <h2>{quote.quote}</h2>
      <h4>- {quote.author}</h4>
    </div>
  );
}

export default Quote;
