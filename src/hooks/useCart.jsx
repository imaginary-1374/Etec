import { useState, useEffect } from "react";

const CART_KEY = "cart_items";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (product) => {
    setCart((prev) => {
      const current = prev.find((item) => item.id === product.id);
      if (current) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { id: product.id, price: product.price, quantity: 1 }];
      }
    });
  };

  const removeItem = (product) => {
    setCart((prev) => {
      const current = prev.find((item) => item.id === product.id);
      if (current?.quantity === 1) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  const deleteItem = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return {
    cart,
    addItem,
    removeItem,
    deleteItem,
    clearCart,
    totalCount,
    totalPrice,
  };
}
