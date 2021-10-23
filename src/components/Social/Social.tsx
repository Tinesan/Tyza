import React from "react";
import styled from "styled-components";

import Instagram from "images/icons/instagram.svg";
import VK from "images/icons/vk.svg";

const SocialWrapper = styled.div`
  display: flex;

  a {
    display: flex;

    img {
      transition-duration: 0.3s;

      &:hover {
        filter: contrast(80%);
      }
    }
  }
`;

type Props = {
  className?: string;
};

const Social = ({ className }: Props) => {
  return (
    <SocialWrapper className={className}>
      <div className="mr-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vk.com/eda_dlya_jivotnih"
        >
          <img src={VK} alt="VK" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kotdapes.by/"
        >
          <img src={Instagram} alt="VK" />
        </a>
      </div>
    </SocialWrapper>
  );
};

export default Social;
