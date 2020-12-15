import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../contexts/DataContext.jsx";

const Div = styled.div`
  background-color: #f7c8ab;
  margin: 4% 2%;
  padding: 15px;
  @media all and (min-width: 440px) {
  padding: 20px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #9947bc;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #8025a7;
  }
`;

export default function CartSummary(props) {
  const data = useContext(DataContext);
  const numberOfItems = data.items.reduce(
    (acc, each) => (each.quantity > 0 ? (acc += each.quantity) : acc),
    0
  );
  const totalPrice = data.items.reduce(
    (acc, each) => (each.quantity > 0 ? (acc += each.price*each.quantity) : acc),
    0
  );
  const onCheckOut = () => {
    data.setItems({ type: "RESET" });
  };
  return (
    <>
      {numberOfItems > 0 ? (
        <Div>
          <div>
            <span>
              {numberOfItems}
              {numberOfItems > 1 ? " items" : " item"} | Rs. {totalPrice}
            </span>
          </div>
          <div>
            <Button onClick={onCheckOut}>VIEW CART</Button>
          </div>
        </Div>
      ) : null}
    </>
  );
}
