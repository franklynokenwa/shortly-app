import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./Button";
import StyledShortenedLink from "./styles/ShortenedLinks.styled";

const ShortenedLink = (props) => {
  const [copied, setCopied] = useState(false);
  const { userInfo } = props;
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonBackgroundColor, setButtonBackgroundColor] =
    useState("hsl(180, 66%, 49%)");
  const [hoverColor, setHoverColor] = useState("hsl(180, 66%, 75%)");

  function changeButtonColorAndText() {
    setButtonText("Copied!");
  }

  return (
    <StyledShortenedLink>
      {userInfo?.map((item) => {
        return (
          <div className="container" key={item.code}>
            <p className="container-original">{item.original}</p>
            <div>
              <p id="fullLink">{item.full}</p>
              <br />
              <br />

              <CopyToClipboard
                text={item.full}
                onCopy={() => {
                  setCopied(true);
                  setButtonBackgroundColor("hsl(255,11%,22%)");
                  setHoverColor(null);
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
              </CopyToClipboard>
            </div>
          </div>
        );
      })}
    </StyledShortenedLink>
  );
};

export default ShortenedLink;
