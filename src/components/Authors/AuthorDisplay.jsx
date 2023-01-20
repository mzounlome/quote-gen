import {
  ArrowDiv,
  AuthorBox,
  AuthorButton,
  AuthorCareer,
  AuthorName,
} from "./AuthorDisplay-styles";

import { BsArrowRightShort } from "react-icons/bs";
import React from "react";

const AuthorDisplay = ({ currentQuote, handleAuthorQuotes }) => {
  return (
    <AuthorBox onClick={() => handleAuthorQuotes(currentQuote.author)}>
      <AuthorButton>
        <AuthorCareer>author</AuthorCareer>
        <AuthorName>{currentQuote.author} </AuthorName>
        <ArrowDiv>
          <BsArrowRightShort size={25} />
        </ArrowDiv>
      </AuthorButton>
    </AuthorBox>
  );
};

export default AuthorDisplay;
