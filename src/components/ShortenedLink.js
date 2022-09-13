import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./Button";
import StyledShortenedLink from "./styles/ShortenedLinks.styled";
import SweetAlert2 from "react-sweetalert2";

const ShortenedLink = (props) => {
  const [copied, setCopied] = useState(false);
  const [swalProps, setSwalProps] = useState({});
  const { userInfo } = props;
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("hsl(180, 66%, 49%)");
  const [hoverColor,setHoverColor] = useState("hsl(180, 66%, 75%)")

  function changeButtonColorAndText() {
    console.log("test");
    // setButtonText("Copied");
    // setButtonBackgroundColor('black')
    setButtonText("Copied");
  }
  //  name={a}
  //   backgroundColor={buttonBackgroundColor}

  return (
    <StyledShortenedLink>
      {userInfo?.map((item) => {
        return (
          <div key={item.code}>
            <p>{item.original}</p>
            <div>
              <p id="fullLink">{item.full}</p>
              <br />
              <br />

              <CopyToClipboard
                text={item.full}
                onCopy={() => {
                  setCopied(true);
                  setButtonBackgroundColor("hsl(255,11%,22%)")
                  setHoverColor(null)
                }}
              >
                <Button
                    backgroundColor={buttonBackgroundColor}
                    hoverBackgroundColor={hoverColor}
                    onClick={changeButtonColorAndText}
                    borderRadius="10px"
                    name={buttonText}
                    color={"white"}
                />
                {/* <button
                  backgroundColor={buttonBackgroundColor}
                  onClick={changeButtonColorAndText}
                >
                  {buttonText}
                </button> */}
              </CopyToClipboard>
              
            </div>
          </div>
        );
      })}
    </StyledShortenedLink>
  );
};

export default ShortenedLink;
