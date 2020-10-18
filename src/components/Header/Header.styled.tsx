import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

import Cat from "images/cat.png";
import Dog from "images/dog.png";
import { colors } from "ui/colors";

const { Item } = ListGroup;

export const HeaderWrapper = styled.section`
  padding: 25px 0;
  background: linear-gradient(286.13deg, #c1b3a8 -0.57%, #fff7f1 100.67%);
  background: url(${Dog}) no-repeat, url(${Cat}) no-repeat,
    linear-gradient(286.13deg, #c1b3a8 -0.57%, #fff7f1 100.67%);
  background-position: 90% bottom, 90% bottom, 0 0;
  height: 670px;
`;

export const ListGroupItem = styled(Item)`
  background-color: transparent;
  border: none;
  font-size: 20px;
  transition-duration: 0.3s;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    color: ${colors.coffee};
    text-shadow: 0 0 0.65px ${colors.coffee}, 0 0 0.65px ${colors.coffee};
  }
`;

export const Title = styled.h1`
  color: ${colors.coffee};
  font-size: 64px;
  font-weight: 700;
`;

export const TitleWrapper = styled.div`
  max-width: 600px;
`;

export const SubtitleWrapper = styled.div`
  max-width: 345px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  opacity: 0.5;
`;
