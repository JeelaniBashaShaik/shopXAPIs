import * as cartService from "../services/cart";

export const getUserCart = (req, res) => {
    const info = cartService.getUserCart();
    res.json(info);
  };
  
  export const addItemToCart = (req, res) => {
    const response = cartService.addItemToCart();
    res.json(response);
  };