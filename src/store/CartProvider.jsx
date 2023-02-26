import React from 'react'
import { useReducer } from 'react'
import CartContext from './CartContext'

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider = (props) => {
const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => { 
        dispatchCartAction({type: 'ADD', item: item})
        
    }
    const removeItem = (id) => { 
        dispatchCartAction({type:'REMOVE', id: id})
    }
    const cartcontex = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItem
}

    return <CartContext.Provider value={cartcontex}>
      {props.children}
  </CartContext.Provider>
   
 
}

export default CartProvider