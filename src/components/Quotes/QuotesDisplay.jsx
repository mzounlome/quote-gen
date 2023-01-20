import { QuoteDiv } from "./QuotesDisplay-styles";

const QuotesDisplay = ({ currentQuote, authorQuotes }) => {
  return (
    <QuoteDiv>
      {currentQuote.quote}
      {authorQuotes.length > 0
        ? authorQuotes.map((quoteObj) => {
            if (currentQuote.quote !== quoteObj.quote) {
              return (
                <div>
                  {" "}
                  {quoteObj.quote} <br />{" "}
                </div>
              );
            }
          })
        : null}
    </QuoteDiv>
  );
};

export default QuotesDisplay;
