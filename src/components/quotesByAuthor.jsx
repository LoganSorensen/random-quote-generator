import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuotesByAuthor = () => {
  const [quotes, setQuotes] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${params.authorName}`
      )
      .then((res) => {
        setQuotes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="quotes">
        <h2>{params.authorName}</h2>
        {quotes !== [] &&
          quotes.map((quote) => {
            return <p className="quote">"{quote.quoteText}"</p>;
          })}
      </div>
    </>
  );
};

export default QuotesByAuthor;
