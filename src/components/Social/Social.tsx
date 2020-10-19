import React from "react";
import styled from "styled-components";

import Instagram from "images/icons/instagram.svg";
import VK from "images/icons/vk.svg";

const SocialWrapper = styled.div`
  display: flex;
`;

type Props = {
  className?: string;
};

const Social = ({ className }: Props) => {
  return (
    <SocialWrapper className={className}>
      <div className="mr-3">
        <a href="">
          <img src={VK} alt="VK" />
        </a>
      </div>
      <div>
        <a href="">
          <img src={Instagram} alt="VK" />
        </a>
      </div>
    </SocialWrapper>
  );
};

export default Social;
