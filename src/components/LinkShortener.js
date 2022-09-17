import React, { useState, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import StyledLinkSection from "./styles/LinkShortener.styled";
import ShortenedLink from "./ShortenedLink";

const LinkShortener = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrorMessage] = useState({});
  const inputValue = useRef(null);
  const inputForm = useRef(null);
  const [testToCheckWhenToResetForm, setTestToCheckWhenToResetForm] = useState(false);
  const [errorColor, setErrorColor] = useState(false);

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
    setErrorMessage(formValidation(inputValue.current.value));
    setTestToCheckWhenToResetForm(true);
  }

  const userData = [];
  let dataFromStorage;

  function formValidation(value) {
    let errors = {
      inputError: "",
      inputBorderColor:"hsl(0, 87%, 67%)"
    };

    //Regex for url validation
    let expression =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    let regex = new RegExp(expression);

    if (value.match(regex)) {
      setIsLoading(false);
      setErrorColor(false);
      getData();
      console.log("Successful match");
    } else {
      errors.inputError = "Please add a link";
      setErrorColor(true);
      console.log("No match");
    }

    return errors;
  }

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
  if (testToCheckWhenToResetForm) {
    saveAllRequiredLinks();
    resetForm();
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
          style={errorColor ? { outline: " 2px solid hsl(0, 87%, 67%)" } : null}
          placeholder="Shorten a link here..."
        />
        <Button
          name="Shorten it!"
          backgroundColor="hsl(180, 66%, 49%)"
          borderRadius="10px"
          type="submit"
        />
      </form>
      <span className="error" style={{ color: error.inputBorderColor }}>
       <i>{error.inputError}</i>
      </span>

      {isLoading && "Loading"}

      <ShortenedLink userInfo={dataFromStorage} />
    </StyledLinkSection>
  );
};

export default LinkShortener;
