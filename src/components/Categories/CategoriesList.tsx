import React from "react";
import { ListGroup } from "react-bootstrap";

type Props = {
  categories: {
    id: ID;
    name: string;
  }[];
};

const CategoriesList = ({ categories }: Props) => {
  return (
    <ListGroup>
      {categories.map(({ id, name }) => {
        return <ListGroup.Item key={id}>{name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default CategoriesList;
