import React, { useState, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import StyledLinkSection from "./styles/LinkShortener.styled";
import ShortenedLink from "./ShortenedLink";

const LinkShortener = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const inputValue = useRef(null);
  const inputForm = useRef(null);
  const [test, setTest] = useState(false);
  

  //This function is used to get data from the api and save the data in the data state

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${inputValue.current.value}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  };

  const { full_short_link, original_link, code } = data.result || {};

  //This function executes the check and get data function when called when the "shorten it" button is clicked

  function allFunctionsOnFormSubmit(event) {
    event.preventDefault();
    getData();
    check();
    setTest(true);
  }

  const userData = [];
  let dataFromStorage;

  //This saves the links in a session storage

  function saveAllRequiredLinks() {
    if (original_link) {
      let apiLinks = {
        original: original_link,
        full: full_short_link,
        code: code,
      };

      userData.push(apiLinks);

      sessionStorage.setItem("links", JSON.stringify(userData));
      dataFromStorage = JSON.parse(sessionStorage.getItem("links"));
    }
  }
  if (test) {
    saveAllRequiredLinks();
    resetForm();
  }

  function check() {
    if (inputValue.current.value === "") {
      setIsLoading(false);
    }
  }
  //This resets the form after it has been submitted

  function resetForm() {
    if (isLoading === false && inputValue.current.value) {
      inputForm.current.reset();
    }
  }

  return (
    <StyledLinkSection>
      <form ref={inputForm} onSubmit={allFunctionsOnFormSubmit}>
        <input
          type="text"
          ref={inputValue}
          placeholder="Shorten a link here..."
        />
        <Button
          name="Shorten it!"
          backgroundColor="hsl(180, 66%, 49%)"
          borderRadius="10px"
          type="submit"
        />
      </form>

      {isLoading && "Loading"}

      <ShortenedLink userInfo={dataFromStorage} />
    </StyledLinkSection>
  );
};

export default LinkShortener;
