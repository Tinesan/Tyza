import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import { BasketIcon } from "components/Button";
import UpArrow from "images/icons/upArrow.svg";
import { colors } from "ui/colors";

const PageContolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  right: -80px;
  opacity: 0;
  transition-duration: 1s;

  &.show {
    bottom: 20px;
    right: 20px;
    opacity: 1;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  box-shadow: 0px 4px 20px rgba(120, 99, 84, 0.1),
    2px 0px 20px rgba(120, 99, 84, 0.1);
  border-radius: 5px;
  background-color: ${colors.white};
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 20px rgba(120, 99, 84, 0.3),
      2px 0px 20px rgba(120, 99, 84, 0.3);
  }

  > img {
    max-width: 20px;
    max-height: 20px;
  }
`;

const PageContols = () => {
  const [showControls, setShowControls] = useState<boolean>(false);
  useEffect(() => {
    const onscroll = () => {
      const pageHeight = document.body.scrollHeight;
      const { pageYOffset, innerHeight } = window;

      const showControls =
        pageYOffset > 70 && pageHeight - innerHeight - pageYOffset - 200 > 0;

      if (showControls) {
        setShowControls(true);
      } else {
        setShowControls(false);
      }
    };
    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <PageContolsWrapper className={showControls ? "show" : ""}>
      <Link to="header" spy smooth duration={1000}>
        <ButtonWrapper className="mb-3">
          <img src={UpArrow} alt="up-arrow" />
        </ButtonWrapper>
      </Link>
      <ButtonWrapper>
        <BasketIcon />
      </ButtonWrapper>
    </PageContolsWrapper>
  );
};

export default PageContols;
