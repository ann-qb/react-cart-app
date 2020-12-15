import { useContext } from "react";
import { DataContext } from "./../../contexts/DataContext.jsx";
import ItemCard from "./../ItemCard";

export default function ItemsList(props) {
  const data = useContext(DataContext);
  return data.items.map((item) => <ItemCard key={item.id} item={item} setItem={data.setItems}/>);
}
