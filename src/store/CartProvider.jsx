import React from 'react';
import { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    let updatedItems;
    const existingItemIdx = state.items.findIndex((item) => item.id === action.item.id);
    const exsitingItem = state.items[existingItemIdx];

    if (exsitingItem) {
      const updatedItem = {
        ...exsitingItem,
        amount: exsitingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIdx] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingItemIdx = state.items.findIndex((item) => item.id === action.id);
    const exsitingItem = state.items[existingItemIdx];
    const updatedTotalAmount =  state.totalAmount - exsitingItem.price
    let updatedItems;
    if (exsitingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id )
      
    } else {
      const updatedItem = { ...exsitingItem, amount: exsitingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[existingItemIdx] = updatedItem;
      
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };
  const cartcontex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItem,
  };

  return <CartContext.Provider value={cartcontex}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
