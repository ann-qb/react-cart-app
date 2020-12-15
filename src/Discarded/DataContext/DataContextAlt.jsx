import React, { useState } from "react";

const initialState = [{
        id: 0,
        name: "Item 1",
        price: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quantity: 0,
    },
    {
        id: 1,
        name: "Item 2",
        price: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quantity: 0,
    },
    {
        id: 2,
        name: "Item 3",
        price: 170,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quantity: 0,
    },
    {
        id: 3,
        name: "Item 4",
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quantity: 0,
    },
    {
        id: 4,
        name: "Item 5",
        price: 240,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quantity: 0,
    },
];

export function cartState() {
    const [items, setItems] = useState(initialState);
    const updateCart = (action) => {
        const { type, id } = action;
        const itemId = parseInt(id);
        if (type === "INCREMENT") {
            // let found = false;
            console.log(parseInt(id));
            setItems(() =>
                items.map((each) => {
                    if (each.id === itemId) {
                        // found = true;
                        console.log({...each, quantity: each.quantity + 1 });

                        return {...each, quantity: each.quantity + 1 };
                    }
                    return each;
                })
            );
            // add
            // if (!found) {
            //   items = [...items, { id, quantity: 1 }];
            // }
        }
        if (type === "DECREMENT") {
            const itemIndex = items.findIndex((each) => each.id === itemId);
            // update or delete
            if (itemIndex > -1) {
                const each = items[itemIndex];
                const less = each.quantity - 1;
                if (less < 0) {
                    setItems([
                        ...items.slice(0, itemIndex),
                        ...items.slice(itemIndex + 1),
                    ]);
                } else {
                    setItems([
                        ...items.slice(0, itemIndex),
                        {...each, quantity: less },
                        ...items.slice(itemIndex + 1),
                    ]);
                }
            }
        }
        console.log(items);
        //   return items;
    };
}

// export const setItems = (action) => {
//   const { type, id } = action;
//   const itemId = parseInt(id);
//   if (type === "INCREMENT") {
//     // let found = false;
//     console.log(parseInt(id));
//     items = items.map((each) => {
//       if (each.id === itemId) {
//         // found = true;
//         console.log({ ...each, quantity: each.quantity + 1 });

//         return { ...each, quantity: each.quantity + 1 };
//       }
//       return each;
//     });
//     // add
//     // if (!found) {
//     //   items = [...items, { id, quantity: 1 }];
//     // }
//   }
//   if (type === "DECREMENT") {
//     const itemIndex = items.findIndex((each) => each.id === itemId);
//     // update or delete
//     if (itemIndex > -1) {
//       const each = items[itemIndex];
//       const less = each.quantity - 1;
//       if (less < 0) {
//         return [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
//       } else {
//         return [
//           ...items.slice(0, itemIndex),
//           { ...each, quantity: less },
//           ...items.slice(itemIndex + 1),
//         ];
//       }
//     }
//   }
//   //   console.log(items);
//   //   return items;
// };

export const DataContext = React.createContext();