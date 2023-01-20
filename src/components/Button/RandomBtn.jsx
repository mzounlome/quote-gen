import { ButtonContainer, RandomButton } from "./randomBtn-styles";

import React from "react";
import { TiArrowSync } from "react-icons/ti";

const randomBtn = ({ handleRandomQuote, setAuthorQuotes }) => {
  return (
    <ButtonContainer
      onClick={() => {
        handleRandomQuote();
        setAuthorQuotes([]);
      }}
    >
      <RandomButton>
        random <TiArrowSync />{" "}
      </RandomButton>
    </ButtonContainer>
  );
};

export default randomBtn;
