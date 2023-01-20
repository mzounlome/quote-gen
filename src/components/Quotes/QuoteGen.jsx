const QuoteGen = require("randomquote-api");

const randomquote = QuoteGen.randomQuote();
console.log(randomquote);

const getbyauthor = QuoteGen.getbyauthor("J.R.R. Tolkien");
console.log(getbyauthor);

export default QuoteGen;
