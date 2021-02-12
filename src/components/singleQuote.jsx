import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleQuote = ({ quote }) => {
  return (
    <div>
      <p className="quote">"{quote.quoteText}"</p>
      <Link to={`/author/${quote.quoteAuthor}`} className="quote-link">
        <div className="quote-info">
          <span className="author">{quote.quoteAuthor}</span>
          <span className="genre">{quote.quoteGenre}</span>
        </div>
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default SingleQuote;
