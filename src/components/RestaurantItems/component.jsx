import { items, DataContext } from "./../../contexts/DataContext.jsx";
import ItemsList from "./../ItemsList";
import CartSummary from "./../CartSummary";
import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
margin: 0 auto;
max-width: 768px;
`;

export default function RestaurantItems() {
  const [data, setData] = useState(items);
  const setItems = (action) => {
    const { type, id } = action;
    const itemId = parseInt(id);
    if (type === "INCREMENT") {
      setData(
        data.map((each) => {
          if (each.id === itemId) {
            return { ...each, quantity: each.quantity + 1 };
          }
          return each;
        })
      );
    }
    if (type === "DECREMENT") {
      const itemIndex = data.findIndex((each) => each.id === itemId);
      // update or delete
      const each = data[itemIndex];
      const less = each.quantity - 1;
      if (less < 0) {
        setData([...data.slice(0, itemIndex), ...data.slice(itemIndex + 1)]);
      } else {
        setData([
          ...data.slice(0, itemIndex),
          { ...each, quantity: less },
          ...data.slice(itemIndex + 1),
        ]);
      }
    }
    if (type === "RESET") {
      setData(items);
    }
  };
  return (
    <Div>
      <DataContext.Provider value={{ items: data, setItems }}>
        <ItemsList />
        <CartSummary />
      </DataContext.Provider>
    </Div>
  );
}
