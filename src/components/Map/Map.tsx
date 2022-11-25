import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
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
    text: "г.п.Смиловичи, ул.Дзержинского, 20А, (продуктовый магазин «Семёрочка»)",
    coordinates: [53.748853, 28.009147],
  },
  {
    text: "г.Дзержинск,  ул.Зелёная, 18а, (Зоомагазин «Мир питомца»)<br/>Время работы пн - вск с 10 00 до 20 00",
    coordinates: [53.689833, 27.116213],
  },
  {
    text: "г.Минск ул. Аэродромная, 32, (Зоомагазин «Мир питомца»)",
    coordinates: [53.871275, 27.555094],
  },
  {
    text: "г.Минск, ул.Буденного, 16а (универсам «Тракторозаводской»)",
    coordinates: [53.883123, 27.612173],
  },
  {
    text: "агрогородок Ратомка, ул. Корицкого, 73Б (продуктовый магазин «Star Market»)",
    coordinates: [53.936004, 27.350377],
  },
  {
    text: "агрогородок Ратомка, ул. Янтарная, 2А (продуктовый магазин «Star Market»)",
    coordinates: [53.939465, 27.327074],
  },
  {
    text: "д.Тарасово, ул. Олимпийская, 21А (продуктовый магазин «Star Market»)",
    coordinates: [53.922904, 27.374514],
  },
  {
    text: "г.Минск, ул.Наполеона Орды, 33 («Зоомагазин»)<br/>Время работы пн - пт с 10 00 до 20 00; вых дни и праздничные с 10 30 до 18 00<br/>Тел. +375-29-333-63-62 Вайбер +375-29-333-63-62",
    coordinates: [53.845594, 27.484854],
  },
  {
    text: "г.Минск, ул.Богдановича, 198 (зоомагазин Zootovarisch) тел. +375-44-767-77-44",
    coordinates: [53.942969, 27.58905],
  },
  {
    text: "г.Минск, ул.Алибегова, 12Б («Зоомагазин»)<br/>Время работы пн - вск с 10 00 до 20 00",
    coordinates: [53.872274, 27.481234],
  },
  {
    text: "Самовывоз. г.Минск, пр-т. Независимости, д. 40<br/>(предварительное согласование по телефону +375-44-794-86-56 <b>обязательно</b>)<br/>Минимальная сумма заказа 20 рублей",
    coordinates: [53.908766, 27.576168],
  },
  {
    text: "г.Дзержинск, ул.Минская, 27 (Зоомагазин «Мир питомца»)<br/>Время работы пн - вск с 10 00 до 21 00",
    coordinates: [53.681972, 27.141042],
  },
];

const MapWrapper = styled.div`
  position: relative;
  height: 520px;
  width: 100%;

  @media ${device.mobile} {
    height: 350px;
  }
`;

const loadYandexMap = (callback?: () => void) => {
  const existingScript = document.getElementById("googleMaps");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=24886bfb-1145-4d92-9149-0816c030af7b";
    script.id = "yandexMap";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

const Map = () => {
  useEffect(() => {
    loadYandexMap(() => {
      const ymaps = (window as MyWindow).ymaps;

      ymaps.ready(function () {
        const map = new ymaps.Map("yandex-map", {
          zoom: 10,
          center: [53.859284, 27.561831],
          controls: ["zoomControl"],
        });

        if (map) {
          ymaps.modules.require(["Placemark"], (Placemark: any) => {
            mapPlaces.forEach(({ coordinates, text }) => {
              const marker = new Placemark(
                coordinates,
                {
                  hintContent: text,
                  balloonContent: text,
                },
                {
                  iconLayout: "default#image",
                  iconImageHref: MapPointer,
                  iconImageSize: [140, 50],
                  iconImageOffset: [-70, -25],
                }
              );
              map.geoObjects.add(marker);
            });
          });
        }
      });
    });
  }, []);
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
      <MapWrapper className="mt-3 mt-lg-5" id="yandex-map"></MapWrapper>
    </Element>
  );
};

export default Map;
