import { QuoteDiv, TextDiv } from "./QuotesDisplay-styles";

const QuotesDisplay = ({ currentQuote, authorQuotes }) => {
  return (
    <QuoteDiv>
      <TextDiv>{currentQuote.quote}</TextDiv>
      {authorQuotes.length > 0
        ? authorQuotes.map((quoteObj) => {
            if (currentQuote.quote !== quoteObj.quote) {
              return (
                <TextDiv>
                  {" "}
                  {quoteObj.quote} <br />{" "}
                </TextDiv>
              );
            }
          })
        : null}
    </QuoteDiv>
  );
};

export default QuotesDisplay;
