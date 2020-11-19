import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import { Placemark, Map as YMap, YMaps } from "react-yandex-maps";
import styled from "styled-components";

import MapPointer from "images/icons/mapPointer.svg";
import { device } from "ui/media";
import { H2 } from "ui/Title";

const mapPlaces = [
  {
    text: "г.п.Смиловичи, ул.Дзержинского, 2, (продуктовый магазин «Продукты»)",
    coordinates: [53.751638, 28.009156],
  },
  {
    text:
      "г.п.Смиловичи, ул.Дзержинского, 20А, (продуктовый магазин «Семёрочка»)",
    coordinates: [53.748853, 28.009147],
  },
  {
    text: "г.Минск, ТРЦ Экспобел, фермерский рынок, место 59",
    coordinates: [53.964908, 27.624972],
  },
  {
    text: "г. Минск ул.Корженевского, 27 (универсам «Корженевский»)",
    coordinates: [53.84817, 27.502039],
  },
  {
    text: "г.Минск, ул.Буденного, 16а (универсам «Тракторозаводской»)",
    coordinates: [53.883123, 27.612173],
  },
  {
    text: "г.Минск, ул.Асаналиева, 42 (универсам «Суничка»)",
    coordinates: [53.851915, 27.54576],
  },
  {
    text:
      "агрогородок Ратомка, ул. Корицкого, 73Б (продуктовый магазин «Star Market»)",
    coordinates: [53.936004, 27.350377],
  },
  {
    text:
      "агрогородок Ратомка, ул. Янтарная, 2А (продуктовый магазин «Star Market»)",
    coordinates: [53.939465, 27.327074],
  },
  {
    text:
      "д.Тарасово, ул. Олимпийская, 21А (продуктовый магазин «Star Market»)",
    coordinates: [53.922904, 27.374514],
  },
];

const MapWrapper = styled.div`
  position: relative;
  height: 520px;

  @media ${device.mobile} {
    height: 350px;
  }
`;

const Map = () => {
  return (
    <Element name="contacts">
      <Container>
        <Row>
          <Col>
            <H2 className="amatic coffee-color text-center">
              Где купить наш корм
            </H2>
          </Col>
        </Row>
      </Container>
      <MapWrapper className="mt-3 mt-lg-5">
        <YMaps query={{ lang: "ru_RU" }}>
          <YMap
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            defaultState={{ zoom: 10, center: [53.902284, 27.561831] }}
          >
            {mapPlaces.map(({ coordinates, text }) => (
              <Placemark
                options={{
                  iconLayout: "default#image",
                  iconImageHref: MapPointer,
                  iconImageSize: [140, 50],
                  iconImageOffset: [-70, -25],
                }}
                properties={{
                  hintContent: text,
                  balloonContent: text,
                }}
                key={text}
                geometry={coordinates}
                modules={["geoObject.addon.hint", "geoObject.addon.balloon"]}
              />
            ))}
          </YMap>
        </YMaps>
      </MapWrapper>
    </Element>
  );
};

export default Map;
