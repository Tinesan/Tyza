import { BasketList } from "components/Basket";
import BasketResult from "components/Basket/BasketResult";
import { TBasketItem } from "components/Basket/helpers";
import Button, { ButtonColor, ButtonSize } from "components/Button";
import { BasketContext } from "providers/BasketProvider";
import { DataContext } from "providers/DataProvider";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { colors } from "ui/colors";
import { H3 } from "ui/Title";
import { getBasketListData } from "./helpers";
import useModal from "./hooks";

type Props = {
  onClose: () => void;
};

const BasketModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasketListWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 2px solid ${colors.ebb};
`;

const ModalFooter = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  > div {
    width: calc(50% - 15px);
    flex-shrink: 0;
  }
`;

const ResultWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BasketModal = ({ onClose }: Props) => {
  const { openModal } = useModal();
  const { basketValues } = useContext(BasketContext);
  const { products } = useContext(DataContext);
  const basketListData: TBasketItem[] = getBasketListData(
    basketValues,
    products
  );

  useEffect(() => {
    const basketIsEmpty = !Object.keys(basketValues).length;
    if (basketIsEmpty) {
      onClose();
    }
  }, [basketValues, onClose]);

  return (
    <BasketModalWrapper>
      <H3 className="coffee-color mb-4">Ваша корзина</H3>
      <BasketListWrapper>
        <BasketList data={basketListData} />
      </BasketListWrapper>
      <ModalFooter>
        <ResultWrapper>
          <BasketResult />
        </ResultWrapper>
        <ButtonWrapper>
          <Button
            size={ButtonSize.LARGE}
            color={ButtonColor.WHITE_WITH_BORDER}
            text="ОФОРМИТЬ ЗАКАЗ"
            onClick={() => openModal("orderModal")}
          />
        </ButtonWrapper>
      </ModalFooter>
    </BasketModalWrapper>
  );
};

export default BasketModal;
