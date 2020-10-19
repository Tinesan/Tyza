import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { useUpdateProductImageByIdMutation } from "generated/graphql";

import Categories from "../../images/categories.png";

const AdminPageWrapper = styled.section`
  padding-top: 40px;
`;

const CardWrapper = styled.div`
  max-width: 300px;
  text-align: center;
`;

const AdminPage = () => {
  const history = useHistory();
  const [updateProductImageByIdMutation] = useUpdateProductImageByIdMutation();

  const onInputChange = ({
    target: { validity, files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    validity.valid && uploadFile(files);
  };

  const uploadFile = (files: FileList | null) => {
    if (files?.length) {
      updateProductImageByIdMutation({
        variables: { file: files[0], main: true },
      });
    }
  };
  return (
    <AdminPageWrapper>
      <Container>
        <Row>
          <Col>
            <CardWrapper>
              <Card>
                <Card.Img variant="top" src={Categories} />
                <Card.Body>
                  <Card.Title>Продукты</Card.Title>
                  <Card.Text>Продукты</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => history.push("/products")}
                  >
                    Перейти к товарам
                  </Button>
                </Card.Body>
              </Card>
            </CardWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="file" onChange={onInputChange} />
          </Col>
        </Row>
      </Container>
    </AdminPageWrapper>
  );
};

export default AdminPage;
