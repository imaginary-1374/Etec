import { createContext } from "react";
import { useCart } from "@/hooks/useCart";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const cartValues = useCart();

  return <CartContext value={cartValues}>{children}</CartContext>;
}
