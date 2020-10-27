import React from "react";

import { OrderContentItemFragment } from "generated/graphql";

type Props = {
  data: OrderContentItemFragment;
};

const OrderItem = ({ data }: Props) => {
  const { customer, deliveryTime, productOrderLines } = data;
  const { name, phone, street, house, flat } = customer;
  const fullPrice = productOrderLines.reduce((acc, product) => {
    const price = product.price * product.orderQuantity;
    return (acc += price);
  }, 0);
  return (
    <tr>
      <td>
        <div className="d-flex flex-column">
          <span>{name}</span>
          <span className="font-weight-bold">{phone}</span>
        </div>
      </td>
      <td>
        <div className="d-flex flex-column">
          <span>
            {street} - {house} {flat && `-${flat}`}
          </span>
          <span className="font-weight-bold">{deliveryTime}</span>
        </div>
      </td>
      <td>
        <div className="d-flex flex-column">
          {productOrderLines.map((product) => {
            const { id, name, orderQuantity, price } = product;
            return (
              <div className="d-flex flex-column" key={id}>
                <span>
                  {name} - {orderQuantity}
                </span>
                <span>Стоимость товара : {orderQuantity * price}</span>
              </div>
            );
          })}
        </div>
      </td>
      <td>
        <span className="font-weight-bold">{fullPrice}</span>
      </td>
    </tr>
  );
};

export default OrderItem;
